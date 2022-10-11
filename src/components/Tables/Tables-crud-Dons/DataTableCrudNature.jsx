
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Checkbox } from 'primereact/checkbox';

import { classNames } from 'primereact/utils';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../../../views/dons/service/ProductService';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
import { Rating } from 'primereact/rating';
import { Toolbar } from 'primereact/toolbar';
import { InputTextarea } from 'primereact/inputtextarea';
import { RadioButton } from 'primereact/radiobutton';
import { InputNumber } from 'primereact/inputnumber';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import './DataTableCrud.css';
import { TextArea } from 'semantic-ui-react';

const DataTableCrudNature = (props) => {
    const navigate = useNavigate()

 

    const [products, setProducts] = useState(null);
    const [productDialog, setProductDialog] = useState(false);
    const [deleteProductDialog, setDeleteProductDialog] = useState(false);
    const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
    const [product, setProduct] = useState('');
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);
    const productService = new ProductService();




    useEffect(() => {
        
        productService.getNature().then(data =>  setProducts(data));

    }, []); 


    const voirDetailsActeurs=()=>{
        navigate(props.detailUrl,{
            state:{
                idActeur:55,
                typeActeur:props.acteursTitle
        }})
    }

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }

    const openNew = () => {

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

        if (product.id.trim() && product.categorieV.trim()&& product.categorieObjet.trim()&& product.typeDons.trim()&& product.donateur.trim()&& product.typeObjet.trim()) {
            let _products = [...products];
            let _product = {...product};
            if (product.id) {
                const index = findIndexById(product.id);

                _products[index] = _product;
                toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
            }
            else {
                _product.id = createId();
                _product.image = 'product-placeholder.svg';
                _products.push(_product);
                toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
            }

            setProducts(_products);
            setProductDialog(false);
           
        }
        

    }

    const editProduct = (product) => {
        setProduct({...product});
        setProductDialog(true);
    }

    const confirmDeleteProduct = (product) => {
        setProduct(product);
        setDeleteProductDialog(true);
    }

    const deleteProduct = () => {
        let _products = products.filter(val => val.id !== product.id);
        setProducts(_products);
        setDeleteProductDialog(false);
      
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

    const createId = () => {
        let id = '';
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    }


    const importCSV = (e) => {
        const file = e.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            const csv = e.target.result;
            const data = csv.split('\n');

            // Prepare DataTable
            const cols = data[0].replace(/['"]+/g, '').split(',');
            data.shift();

            const importedData = data.map(d => {
                d = d.split(',');
                const processedData = cols.reduce((obj, c, i) => {
                    c = c === 'Status' ? 'inventoryStatus' : (c === 'Reviews' ? 'rating' : c.toLowerCase());
                    obj[c] = d[i].replace(/['"]+/g, '');
                    (c === 'price' || c === 'rating') && (obj[c] = parseFloat(obj[c]));
                    return obj;
                }, {});

                processedData['id'] = createId();
                return processedData;
            });

            const _products = [...products, ...importedData];

            setProducts(_products);
        };

        reader.readAsText(file, 'UTF-8');
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

   

    const leftToolbarTemplate = () => {
        return (
            <React.Fragment>
                <div  className="d-flex" style={{justifyContent:"space-between"}} >
                <span className='h3'>Liste des dons en nature</span>
                   
                </div>
            </React.Fragment>
        )
    }

    const rightToolbarTemplate = () => {
        return (
            <React.Fragment>
                <div  className="d-flex" style={{justifyContent:"space-between",justifyItems:"center"}} >
                    <Button  onClick={exportCSV} className="px-3 p-button-sm p-button-rounded p-button-outlined p-button-raised p-button-help me-5" aria-label="Plus">
                        <i className="pi pi-upload px-2"></i>
                        <span className="px-5">Exporter</span>
                    </Button>
                    <div className=" font-weight-bold" style={{fontWeight:"bold"}} >
                        <p>
                            <span className="me-3" >
                            {products ==null ?'0':products.length }
                            </span>
                            {props.acteursTitle}
                        </p>
                    </div>
                </div>

            </React.Fragment>
        )
    }

    const lieuBodyTemplate = (rowData) => {
        return (rowData.lieu_reception);
    }
    const EtatBodyTemplate = (rowData) => {
        return (rowData.Etat);
    }
    const photoBodyTemplate = (rowData) => {
        return <img src={rowData.photo} width='100' />
    }

    const idBodyTemplate = (rowData) => {
        return (rowData.id);
    }
    const donateurBodyTemplate = (rowData) => {
        return rowData.donateur;
    }

    const typeDonsBodyTemplate = (rowData) => {
        return rowData.typeDons;
    }
    const categorieVTemplate = (rowData) => {
        return rowData.categorieV
  
    }
    const typeObjetTemplate = (rowData) => {
        return rowData.typeObjet;
  
    }
    const categorieObjetTemplate = (rowData) => {
        return rowData.categorieObjet;
  
    }
    const cibleVTemplate = (rowData) => {
        return rowData.cibleV
  
    }
    const affecterTemplate = (rowData) => {
        return(
            <span
            className={`badge badge-success bg-success`}
          >
    {rowData.affecter == true ? 'Oui': ''}
    </span>
        )
  
     
  
    }

  

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button icon="pi pi-eye" className="p-button-rounded p-button-outlined " onClick={() => voirDetailsActeurs()} />
            </React.Fragment>
        );
    }



    const productDialogFooter = (
        <React.Fragment>
            <Button label="Cancel" icon="pi pi-times" className="p-button-text" onClick={hideDialog} />
            <Button label="Save" icon="pi pi-check" className="p-button-text" onClick={saveProduct} />
        </React.Fragment>
    );
    const deleteProductDialogFooter = (
        <React.Fragment>
            <Button label="No" icon="pi pi-times" className="p-button-text" onClick={hideDeleteProductDialog} />
            <Button label="Yes" icon="pi pi-check" className="p-button-text" onClick={deleteProduct} />
        </React.Fragment>
    );
    const deleteProductsDialogFooter = (
        <React.Fragment>
            <Button label="Non" icon="pi pi-times" className="p-button-text" onClick={hideDeleteProductsDialog} />
            <Button label="Oui" icon="pi pi-check" className="p-button-text" onClick={deleteSelectedProducts} />
        </React.Fragment>
    );

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

       

    return (
        <div className="datatable-crud-demo mt-1">
           <Toast ref={toast} />
                      <div className="data-table-container">

                <DataTable ref={dt} value={products} selection={selectedProducts} onSelectionChange={(e) => setSelectedProducts(e.value)}
                    dataKey="id" paginator rows={10} rowsPerPageOptions={[5, 10, 25]}
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    currentPageReportTemplate="Afficher de {first} à {last} de {totalRecords} Acteurs"
                    globalFilter={globalFilter} header={header} responsiveLayout="scroll">
                    <Column selectionMode="multiple" headerStyle={{ width: '2rem' }} exportable={false}></Column>
                    <Column sortable field="id" header="id" body={idBodyTemplate}   style={{ minWidth: '5rem' }}></Column>
                    <Column sortable field="photo" header="Image" body={photoBodyTemplate}  style={{ minWidth: '10rem' }}></Column>
 
                    <Column sortable field="donateur" header="Donateur" body={donateurBodyTemplate}   style={{ minWidth: '16rem' }}></Column>
                    <Column sortable field="typeDons" header="type Dons" body={typeDonsBodyTemplate}  style={{ minWidth: '16rem' }}></Column>
                    <Column sortable field="categorieV" header="Categorie" body={categorieVTemplate}  style={{ minWidth: '15rem' }}></Column>
                    <Column sortable field="categorieObjet" header="categorie Objet" body={categorieObjetTemplate}  style={{ minWidth: '15rem' }}></Column>
                
                    <Column sortable field="typeObjet" header="type Objet" body={typeObjetTemplate}  style={{ minWidth: '10rem' }}></Column>
                    <Column sortable field="cibleV" header="Cible" body={cibleVTemplate}  style={{ minWidth: '15rem' }}></Column>
                    <Column sortable field="lieu_reception" header="Lieu reception" body={lieuBodyTemplate}  style={{ minWidth: '15rem' }}></Column>
                    <Column sortable field="Etat" header="Etat" body={EtatBodyTemplate}  style={{ minWidth: '15rem' }}></Column>
                    <Column sortable field="affecter" header="Affecter " body={affecterTemplate}  style={{ minWidth: '10rem' }}></Column>
                   
                    <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '1rem' }}></Column>
                </DataTable>
            </div>

       
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

export default DataTableCrudNature