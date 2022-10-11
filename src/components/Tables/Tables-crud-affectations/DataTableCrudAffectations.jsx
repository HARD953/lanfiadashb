
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Checkbox } from 'primereact/checkbox';

import axios from 'axios';  
import { classNames } from 'primereact/utils';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../../../views/dons/service/ProductService';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';

import { Toolbar } from 'primereact/toolbar';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import './DataTableCrud.css';


const userItem = 'tokendashlanfi';
const tokenUser = localStorage.getItem(userItem)


const DataTableCrudAffectations = (props) => {
    const navigate = useNavigate()

    let emptyProduct = 
    {
                "nomz": "",
                "q1": "",
                "q3": "",
                "q2": "",
                "q3": "",
                "q4": "",
                "q5":"",
                "q6":"",
                "status":false
            };

    const [products, setProducts] = useState(null);
    const [productDialog, setProductDialog] = useState(false);
    const [deleteProductDialog, setDeleteProductDialog] = useState(false);
    const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
    const [product, setProduct] = useState(emptyProduct);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);
    const [valu,setValu]=useState([])
    const productService = new ProductService();
    
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
 

    const [cities, setCities] = useState([]);

const onCityChangeStaff = (e) => {
    let selectedCities = [...cities];
    let _product = {...product};
    if(e.checked){
        selectedCities.push(e.value);
  
     
        _product[`${'is_staff'}`] = e.value;

        setProduct(_product);
    }
        
    else
        selectedCities.splice(selectedCities.indexOf(e.value), 1);

    setCities(selectedCities);
}

const onCityChangeActive = (e) => {
    let selectedCities = [...cities];
    let _product = {...product};
    if(e.checked){
        selectedCities.push(e.value);
    
        _product[`${'is_active'}`] = e.value;

        setProduct(_product);
    }
    else
        selectedCities.splice(selectedCities.indexOf(e.value), 1);

    setCities(selectedCities);
}





    useEffect(() => {
        
        productService.getAllZones().then(data =>  setProducts(data));

    }, []); 


    const voirDetailsActeurs=(rowData)=>{
    
        
     

        navigate(props.detailUrl,{
            state:{
                infoAgent:valu,
                nomzAgent:rowData.nomz,
                typeActeur:props.acteursTitle
        }})
    }


    const openNew = () => {
        setProduct(emptyProduct);
        setSubmitted(false);
        setProductDialog(true);
    }

    const hideDialog = () => {
        setSubmitted(false);
        setProductDialog(false);
    }

    const hideDeleteProductDialog = () => {
        setDeleteProductDialog(false);
    }

    const hideDeleteProductsDialog = () => {
        setDeleteProductsDialog(false);
    }

    const saveProduct = () => {
        setSubmitted(true);

        if (product.nomz.trim() && product.q1.trim()&& product.q3.trim()&& product.q2.trim()) {
            let _products = [...products];
            let _product = {...product};
            if (product.id) {
                const index = findIndexById(product.id);

                _products[index] = _product;
                toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
            }
            else {
               // _product.id = createId();
                //_product.image = 'product-placeholder.svg';
                _products.push(_product);
                toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Zone Créée', life: 3000 });
            }

            setProducts(_products);

          
           var data = _product;
           console.log(data)
           var config = {
             method: 'post',
             url: 'https://apivulnerable.herokuapp.com/zone/',
             headers: { 
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+tokenUser
              },
             data : data
             
           };
           
           axios(config)
           .then(function (response) {
            console.log(response)
            
           })
           .catch(function (error) {
             console.log(error);
           });


            setProductDialog(false);
            setProduct(emptyProduct);
        }
        

    }


    const confirmDeleteProduct = (product) => {
        setProduct(product);
        setDeleteProductDialog(true);
    }

    const deleteProduct = () => {
        let _products = products.filter(val => val.id !== product.id);
        setProducts(_products);
        setDeleteProductDialog(false);
        setProduct(emptyProduct);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
    }

    const findIndexById = (id) => {
        let index = -1;
        for (let i = 0; i < products.length; i++) {
            if (products[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    }

 

 
    const exportCSV = () => {
        dt.current.exportCSV();
    }

    const confirmDeleteSelected = () => {
        setDeleteProductsDialog(true);
    }

    const deleteSelectedProducts = () => {
        let _products = products.filter(val => !selectedProducts.includes(val));
        setProducts(_products);
        setDeleteProductsDialog(false);
        setSelectedProducts(null);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
    }



    const onInputChange = (e, name) => {
        const val = (e.target && e.target.value) || '';
        let _product = {...product};
        _product[`${name}`] = val;

        setProduct(_product);
    }

   

    const leftToolbarTemplate = () => {
        return (
            <React.Fragment>
                <div  className="d-flex" style={{justifyContent:"space-between"}} >

                    <Button onClick={openNew} className="px-3 p-button-sm p-button-rounded me-5" aria-label="Plus">
                        <i className="pi pi-plus px-2"></i>
                        <span className="px-5">Ajouter</span>
                    </Button>
                    <Button className="px-3 p-button-sm p-button-danger p-button-rounded" aria-label="Plus" onClick={confirmDeleteSelected} disabled={!selectedProducts || !selectedProducts.length}>
                        <i className="pi pi-trash px-2"></i>
                        <span className="px-5">Supprimer</span>
                    </Button>
                   
                </div>
            </React.Fragment>
        )
    }

    const header = (
        <div className="table-header">
            <h4 className="mx-0 my-1 "> {props.acteursTitle} <span className='p-badge p-badge-info'>{products== null ? "0": products.length}</span></h4>
        
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Rechercher..." />
            </span>
            <Button  onClick={exportCSV} className="px-3 p-button-sm p-button-rounded p-button-outlined p-button-raised p-button-help me-5" aria-label="Plus">
                        <i className="pi pi-upload px-2"></i>
                        <span className="px-5">Exporter</span>
            </Button>
        </div>
    );



    const nomzBodyTemplate = (rowData) => {
        return (rowData.nomz);
    }
    const communeBodyTemplate = (rowData) => {
        return rowData.commune;
    }

  
    const q1Template = (rowData) => {
        return rowData.q1
  
    }
    const q2Template = (rowData) => {
        return rowData.q2;
  
    }
    const q3Template = (rowData) => {
        return rowData.q3;
  
    }
    const q4Template = (rowData) => {
        return rowData.q4
  
    }
    const q5Template = (rowData) => {
        return rowData.q5;
  
    }
    const q6Template = (rowData) => {
        return rowData.q6;
  
    }
    const about_meTemplate = (rowData) => {
        return rowData.about_me
  
    }
    const is_activeTemplate = (rowData) => {
        return(
            <span
            className={`badge badge-success bg-success`}
          >
    {rowData.is_active == true ? 'Oui': ''}
    </span>
        )
  
     
  
    }
    const is_staff = (rowData) => {
        return(
            <span
            className={`badge badge-success bg-success`}
          >
    {rowData.is_staff == true ? 'Oui': ''}
    </span>
        )
  
    }
    const is_agentTemplate = (rowData) => {
        return(
            <span
            className={`badge badge-success bg-success`}
          >
    {rowData.is_agent == true ? 'Oui': ''}
    </span>
        )
  
    }
  

    const actionBodyTemplate = (rowData) => {

        return (
            <React.Fragment>
                <Button icon="pi pi-eye" className="p-button-rounded p-button-outlined " onClick={() => voirDetailsActeurs(rowData)} />
            </React.Fragment>
        );
    }



    const productDialogFooter = (
        <React.Fragment>
            <Button label="Annuler" icon="pi pi-times" className="p-button-text" onClick={hideDialog} />
            <Button label="Enregistrer" icon="pi pi-check" className="p-button-text" onClick={saveProduct} />
        </React.Fragment>
    );
    const deleteProductDialogFooter = (
        <React.Fragment>
            <Button label="Non" icon="pi pi-times" className="p-button-text" onClick={hideDeleteProductDialog} />
            <Button label="Oui" icon="pi pi-check" className="p-button-text" onClick={deleteProduct} />
        </React.Fragment>
    );
    const deleteProductsDialogFooter = (
        <React.Fragment>
            <Button label="Non" icon="pi pi-times" className="p-button-text" onClick={hideDeleteProductsDialog} />
            <Button label="Oui" icon="pi pi-check" className="p-button-text" onClick={deleteSelectedProducts} />
        </React.Fragment>
    );

       

    return (
        <div className="datatable-crud-demo mt-1">
           <Toast ref={toast} />
                <Toolbar className="mb-4 bg-white border-0" left={leftToolbarTemplate}  ></Toolbar>
            <div className="data-table-container">

                <DataTable ref={dt} value={products} selection={selectedProducts} onSelectionChange={(e) => setSelectedProducts(e.value)}
                    dataKey="id" paginator rows={10} rowsPerPageOptions={[5, 10, 25]}
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    currentPageReportTemplate="Afficher de {first} à {last} de {totalRecords} Acteurs"
                    globalFilter={globalFilter} header={header} responsiveLayout="scroll">
                    <Column selectionMode="multiple" headerStyle={{ width: '2rem' }} exportable={false}></Column>
                    <Column sortable field="nomz" header="Nom Zone" body={nomzBodyTemplate}   style={{ minWidth: '5rem' }}></Column>
                    <Column sortable field="Commune" header="Commune" body={communeBodyTemplate}  style={{ minWidth: '16rem' }}></Column>
                    <Column sortable field="q1" header="q1" body={q1Template}  style={{ minWidth: '15rem' }}></Column>
                    <Column sortable field="q3" header="q3" body={q3Template}  style={{ minWidth: '15rem' }}></Column>
                
                    <Column sortable field="q2" header="q2" body={q2Template}  style={{ minWidth: '10rem' }}></Column>
                    <Column sortable field="q3" header="q3" body={q3Template}  style={{ minWidth: '15rem' }}></Column>
                    <Column sortable field="q4" header="q4 " body={q4Template}  style={{ minWidth: '10rem' }}></Column>
                    <Column sortable field="q5" header="q5 " body={q5Template}  style={{ minWidth: '15rem' }}></Column>
                    <Column sortable field="q6" header="q6" body={q6Template}  style={{ minWidth: '10rem' }}></Column>
                    
                    <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '1rem' }}></Column>
                </DataTable>
            </div>

            <Dialog visible={productDialog} style={{ width: '450px' }} header="Ajout" modal className="p-fluid" footer={productDialogFooter} onHide={hideDialog}>
                {product.image && <img src={`images/product/${product.image}`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={product.image} className="product-image block m-auto pb-3" />}
                <div className="field">
                    <label htmlFor="nomz">Nom Zone</label>
                    <InputText id="nomz" value={product.nomz} onChange={(e) => onInputChange(e, 'nomz')} required autoFocus className={classNames({ 'p-invalid': submitted && !product.nomz })} />
                    {submitted && !product.nomz && <small className="p-error">E-mail is required.</small>}
                </div>

   
                <div className="field">
                    <label htmlFor="q1">q1</label>
                    <InputText id="q1" value={product.q1} onChange={(e) => onInputChange(e, 'q1')} required  className={classNames({ 'p-invalid': submitted && !product.q1 })} />
                    {submitted && !product.q1 && <small className="p-error">Nom is required.</small>}
                </div>
                <div className="field">
                    <label htmlFor="q2">q2</label>
                    <InputText id="q2" value={product.q2} onChange={(e) => onInputChange(e, 'q2')} required  className={classNames({ 'p-invalid': submitted && !product.q2 })} />
                    {submitted && !product.q2 && <small className="p-error">Mot de passe is required.</small>}
                </div>
                <div className="field">
                    <label htmlFor="q3">q3 </label>
                    <InputText id="q3" value={product.q3} onChange={(e) => onInputChange(e, 'q3')} required className={classNames({ 'p-invalid': submitted && !product.q3 })} />
                    {submitted && !product.q3 && <small className="p-error">q3 is required.</small>}
                </div>
                <div className="field">
                    <label htmlFor="q4">q4</label>
                    <InputText id="q4" value={product.q4} onChange={(e) => onInputChange(e, 'q4')} required className={classNames({ 'p-invalid': submitted && !product.q4})} />
                    {submitted && !product.q4 && <small className="p-error">q3 is required.</small>}
                </div>
           
                <div className="field">
                    <label htmlFor="q5">q5</label>
                    <InputText id="q5" value={product.q5} onChange={(e) => onInputChange(e, 'q5')} required className={classNames({ 'p-invalid': submitted && !product.q5})} />
                    {submitted && !product.q5 && <small className="p-error">q3 is required.</small>}
                </div>
                <div className="field">
                    <label htmlFor="q6">q6</label>
                    <InputText id="q6" value={product.q6} onChange={(e) => onInputChange(e, 'q6')} required className={classNames({ 'p-invalid': submitted && !product.q6 })} />
                    {submitted && !product.q6 && <small className="p-error">q3 is required.</small>}
                </div>

              
            </Dialog>

            <Dialog visible={deleteProductDialog} style={{ width: '450px' }} header="Confirm" modal footer={deleteProductDialogFooter} onHide={hideDeleteProductDialog}>
                <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem'}} />
                    {product && <span>Are you sure you want to delete <b>{product.name}</b>?</span>}
                </div>
            </Dialog>

            <Dialog visible={deleteProductsDialog} style={{ width: '450px' }} header="Confirm" modal footer={deleteProductsDialogFooter} onHide={hideDeleteProductsDialog}>
                <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem'}} />
                    {product && <span>Are you sure you want to delete the selected products?</span>}
                </div>
            </Dialog>
        </div>
    );
}

export default DataTableCrudAffectations