
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
import { Dropdown } from 'primereact/dropdown';


const userItem = 'tokendashlanfi';
const tokenUser = localStorage.getItem(userItem)


const DataTableCrudAgent = (props) => {
    const navigate = useNavigate()

    let emptyProduct = 
    {
                "email": "",
                "user_name": "",
                "commune": "",
                "first_name": "",
                "adresse": "",
                "about_me": "",
                "is_agent": "is_agent",
                "is_active": "",
                "is_staff": "",
                "password":"",
                "district":"",
                "region":"",
                "departement":"",
                "sous_prefecture":""
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

const editProduct = (product) => {
        
    // var jse=[{ name: product.commune ,  code: product.commune }]
     
     
    let _product = {...product};
         
  
         setProduct(_product);
         setProductDialog(true);
        
         
     }




    useEffect(() => {
        
        productService.getAgents().then(data =>  setProducts(data));

    }, []); 

      // Communes Liste Dropdown

      const [communes, setCommunes] = useState([]);

      const [selectedcommune, setselectedcommune] = useState(null);
 

     
      var j=0
      var js=""
      var tab=[]

      

      useEffect(() => {
       
       productService.getAllCommunes().then(data => {

           
           if(j==0)
           {
              
           for(let i=0;i< data.length;i++ )
           {

               js={ name: data[i].COMMUNE ,  code: data[i].COMMUNE }
               
               tab.push(js)
               
           }
         

           setCommunes(tab)

           
           tab=[]
           js=""

          
           
           j=j+1
       }
       });

       }, []); 


       const onCityChangecommune = (e,name) => {
       
    
           setselectedcommune(e.value);
   
           const val = e.value.code || '';
           let _product = {...product};
           _product[`${name}`] = val;
   
           setProduct(_product);
        
       }
       // Communes Liste Dropdown


    const voirDetailsActeurs=(rowData)=>{
    
        
     

        navigate(props.detailUrl,{
            state:{
                infoAgent:valu,
                emailAgent:rowData.email,
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

        if (product.email.trim() && product.first_name.trim()&& product.adresse.trim()&& product.commune.trim()&& product.user_name.trim()) {
            let _products = [...products];
            let _product = {...product};

            if (product.id) {
                const index = findIndexById(product.id);

                _products[index] = _product;

                delete _product['start_date'];
                delete _product['profile_image'];
                delete _product['create'];
                delete _product['profile_image'];
                delete _product['id'];
                delete _product['last_login'];
                delete _product['updated_at'];

                delete _product['password'];

               
                console.log(_product)

                setProducts(_products);

                var data = _product;
           
    
                var config = {
                  method: 'put',
                  url: 'https://apivulnerable.herokuapp.com/agentc/'+product.id+'/',
                  headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+tokenUser
                  },
                  data : data
                };
                
                axios(config)
                .then(function (response) {
                  console.log(JSON.stringify(response));
                  window.location.reload() 
                })
                .catch(function (error) {
                  console.log(error);
                });

                toast.current.show({ severity: 'success', summary: 'Succès', detail: 'Agent mis à jour', life: 3000 });
            }
            else {
               // _product.id = createId();
                //_product.image = 'product-placeholder.svg';
                _products.push(_product);
                toast.current.show({ severity: 'success', summary: 'Succès', detail: 'Agent Créé', life: 3000 });
            }

            setProducts(_products);

          
           var data = _product;
           
           var config = {
             method: 'post',
             url: 'https://apivulnerable.herokuapp.com/agent/',
             headers: { 
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+tokenUser
              },
             data : data
           };
           
           axios(config)
           .then(function (response) {
            window.location.reload() 
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



    const emailBodyTemplate = (rowData) => {
        return (rowData.email);
    }
    const user_nameBodyTemplate = (rowData) => {
        return rowData.user_name;
    }

    const communeBodyTemplate = (rowData) => {
        return rowData.commune;
    }
    const first_nameTemplate = (rowData) => {
        return rowData.first_name
  
    }
    const passwordTemplate = (rowData) => {
        return rowData.password;
  
    }
    const adresseTemplate = (rowData) => {
        return rowData.adresse;
  
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
                <Button icon="pi pi-pencil" className="p-button-rounded p-button-outlined mr-2" onClick={() => editProduct(rowData)} />
 
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
                    <Column sortable field="email" header="Email" body={emailBodyTemplate}   style={{ minWidth: '5rem' }}></Column>
                    <Column sortable field="user_name" header="Nom d'utilisateur" body={user_nameBodyTemplate}   style={{ minWidth: '16rem' }}></Column>
                    <Column sortable field="commune" header="Commune" body={communeBodyTemplate}  style={{ minWidth: '16rem' }}></Column>
                    <Column sortable field="first_name" header="Nom" body={first_nameTemplate}  style={{ minWidth: '15rem' }}></Column>
                    <Column sortable field="adresse" header="Adresse" body={adresseTemplate}  style={{ minWidth: '15rem' }}></Column>
                
                    <Column sortable field="password" header="Mot de Passe" body={passwordTemplate}  style={{ minWidth: '10rem' }}></Column>
                    <Column sortable field="about_me" header="À propos de moi" body={about_meTemplate}  style={{ minWidth: '15rem' }}></Column>
                    <Column sortable field="is_active" header="Actif " body={is_activeTemplate}  style={{ minWidth: '10rem' }}></Column>
                    <Column sortable field="is_staff" header="Personnel " body={is_staff}  style={{ minWidth: '15rem' }}></Column>
                    <Column sortable field="is_agent" header="Agent" body={is_agentTemplate}  style={{ minWidth: '10rem' }}></Column>
                    
                    <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '1rem' }}></Column>
                </DataTable>
            </div>

            <Dialog visible={productDialog} style={{ width: '450px' }} header="Ajout" modal className="p-fluid" footer={productDialogFooter} onHide={hideDialog}>
                {product.image && <img src={`images/product/${product.image}`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={product.image} className="product-image block m-auto pb-3" />}
                <div className="field">
                    <label htmlFor="email">E-mail</label>
                    <InputText id="email" value={product.email} onChange={(e) => onInputChange(e, 'email')} required autoFocus className={classNames({ 'p-invalid': submitted && !product.email })} />
                    {submitted && !product.email && <small className="p-error">E-mail is required.</small>}
                </div>

                <div className="field">
                    <label htmlFor="user_name">Nom d'utilisateur</label>
                    <InputText id="user_name" value={product.user_name} onChange={(e) => onInputChange(e, 'user_name')} required  className={classNames({ 'p-invalid': submitted && !product.user_name })} />
                    {submitted && !product.user_name && <small className="p-error">Nom utilisateur is required.</small>}
                </div>
                <div className="field">
                    <label htmlFor="first_name">Nom</label>
                    <InputText id="first_name" value={product.first_name} onChange={(e) => onInputChange(e, 'first_name')} required  className={classNames({ 'p-invalid': submitted && !product.first_name })} />
                    {submitted && !product.first_name && <small className="p-error">Nom is required.</small>}
                </div>
                <div className="field">
                    <label htmlFor="password">Mot de passe</label>
                    <InputText type="password" id="password" value={product.password} onChange={(e) => onInputChange(e, 'password')} required  className={classNames({ 'p-invalid': submitted && !product.password })} />
                    {submitted && !product.password && <small className="p-error">Mot de passe is required.</small>}
                </div>
            
                <div className="field">
                    <label htmlFor="commune">Commune</label>
                    <Dropdown id="commune"  value={selectedcommune} options={communes} onChange={(e) => onCityChangecommune(e, 'commune')} optionLabel="name" placeholder="commune" className={classNames({ 'p-invalid': submitted && !product.commune })} />
                  {submitted && !product.commune && <small className="p-error">commune is required.</small>}
                </div>
           
                <div className="field">
                    <label htmlFor="district">District</label>
                    <InputText id="district" value={product.district} onChange={(e) => onInputChange(e, 'district')} required className={classNames({ 'p-invalid': submitted && !product.district})} />
                    {submitted && !product.district && <small className="p-error">Adresse is required.</small>}
                </div>
                <div className="field">
                    <label htmlFor="region">Region</label>
                    <InputText id="region" value={product.region} onChange={(e) => onInputChange(e, 'region')} required className={classNames({ 'p-invalid': submitted && !product.region })} />
                    {submitted && !product.region && <small className="p-error">Adresse is required.</small>}
                </div>
                <div className="field">
                    <label htmlFor="departement">Departement</label>
                    <InputText id="departement" value={product.departement} onChange={(e) => onInputChange(e, 'departement')} required className={classNames({ 'p-invalid': submitted && !product.departement })} />
                    {submitted && !product.departement && <small className="p-error">Adresse is required.</small>}
                </div>
                <div className="field">
                    <label htmlFor="sous_prefecture">Sous Prefecture</label>
                    <InputText id="sous_prefecture" value={product.sous_prefecture} onChange={(e) => onInputChange(e, 'sous_prefecture')} required className={classNames({ 'p-invalid': submitted && !product.sous_prefecture})} />
                    {submitted && !product.sous_prefecture && <small className="p-error">Adresse is required.</small>}
                </div>
                <div className="field">
                    <label htmlFor="adresse">Adresse</label>
                    <InputText id="adresse" value={product.adresse} onChange={(e) => onInputChange(e, 'adresse')} required className={classNames({ 'p-invalid': submitted && !product.adresse })} />
                    {submitted && !product.adresse && <small className="p-error">Adresse is required.</small>}
                </div>
             
                

                <div className="field">
                    <label htmlFor="about_me">A propos de moi</label>
                    <InputTextarea id="about_me" value={product.about_me} onChange={(e) => onInputChange(e, 'about_me')} required rows={3} cols={20} />
                </div>
               {/* <div className="field-checkbox">
                    <div className="field-checkbox">
                        <Checkbox inputId="is_active" name="is_active" value="is_active" onChange={onCityChangeActive} checked={cities.indexOf('is_active') !== -1} />
                        <label htmlFor="is_active">Actif</label>
                    </div>
                    <div className="field-checkbox">
                        <Checkbox inputId="is_staff" name="is_staff" value="is_staff" onChange={onCityChangeStaff} checked={cities.indexOf('is_staff') !== -1} />
                        <label htmlFor="is_staff">Personnel</label>
                    </div>
         
                </div> */}

              
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

export default DataTableCrudAgent