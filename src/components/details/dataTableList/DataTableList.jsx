
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Avatar } from 'primereact/avatar';
//import { ProductService } from '../../../views/dons/service/ProductService';
import { Button } from 'primereact/button';
import avatar1 from '../../../assets/images/avatars/1.jpg'
import avatar2 from '../../../assets/images/avatars/2.jpg'
import avatar3 from '../../../assets/images/avatars/3.jpg'
import avatar4 from '../../../assets/images/avatars/4.jpg'
import { propTypes } from 'react-tinder-card';

const datalist =  [
        {"id": "1000","fonction": "Comptable","nom": "Bamboo Watch","etat": "En ligne","image": {avatar1}},
        {"id": "11","fonction": "Informaticien","nom": "Roxane Clair","etat": "En ligne","image": {avatar2}},
        {"id": "12","fonction": "Directeur","nom": "Kouakou Stephane","etat": "Hors ligne","image": {avatar3}},
        {"id": "13","fonction": "Comptable","nom": "Bamboo Watch","etat": "En ligne","image": {avatar4}},
    ]


const DataTableList = (props) => {
    const [products, setProducts] = useState([]);
   // const productService = new ProductService();

    useEffect(() => {
        //productService.getProductsSmall().then(data => setProducts(data));
        setProducts(datalist)
    }, []); // eslint-disable-line react-hooks/exhaustive-deps


    const imageBodyTemplate = (rowData) => {
        return <Avatar image={rowData.image.avatar1} className="mr-2" size="xlarge" shape="circle" />
    }
    
    const actionBodyTemplate = (rowData) => {
        
        return (
            <React.Fragment>
                <Button icon="pi pi-eye" className="p-button-rounded p-button-outlined " onClick={()=> props.onClickUserDetail(rowData) } />
            </React.Fragment>
        );
    }

    return (
        <div>
            <div className="">
                <DataTable value={products}  responsiveLayout="scroll">
                    <Column body={imageBodyTemplate} field="image" header="Image"></Column>
                    <Column field="nom" header="Nom"></Column>
                    <Column field="fonction" header="Fonction"></Column>
                    <Column field="etat" header="Etat"></Column>
                    <Column body={actionBodyTemplate} ></Column>
                </DataTable>
            </div>
        </div>
    );
}

export default DataTableList