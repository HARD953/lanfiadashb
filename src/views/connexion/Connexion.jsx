import React, { useState } from 'react';
import { useFormik } from 'formik';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { classNames } from 'primereact/utils';
import axios from 'axios'; 


import "./Connexion.css";
import { useNavigate } from 'react-router-dom';
import axiosIntance from '../../api/axiosInstance';

const userItem = 'tokendashlanfi';
const userEmail = 'userEmail';

const Connexion = (props,navigate) => {

    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState({});
    const navigation = useNavigate()


    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validate: (data) => {
            let errors = {};


            if (!data.email) {
                errors.email = 'Champ obligatoire.';
            }
            else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
                errors.email = 'Email invalide. Ex. example@email.com';
            }

            if (!data.password) {
                errors.password = 'Mot de passe obligatoire.';
            }


            return errors;
        },
        onSubmit: async (dataN) => {
            setFormData(dataN);
            console.log(dataN)
            
            axiosIntance.post('token/',dataN)
              .then(function (response) {
                console.log(response.data?.access);
                localStorage.setItem(userItem,response.data?.access)
              
                navigation('/dashboard',{replace:true})
              
              })
              .catch(function (error) {
                console.log(error);
              });

            // var data = JSON.stringify({
            //     "email": "junior",
            //     "password": "123456"
            //   });
              
            //   var config = {
            //     method: 'post',
            //     url: 'https://apidons.herokuapp.com/token/',
            //     headers: { 
            //       'Content-Type': 'application/json'
            //     },
          
            //     data : data
            //   };
              
            //   axios.post('https://apidons.herokuapp.com/token/',{
            //     "email": "junior",
            //     "password": "123456"
            //   })
            //   .then(function (response) {
            //     console.log(JSON.stringify(response.data));
            //   })
            //   .catch(function (error) {
            //     console.log(error);
            //   });
              
              



            
            setShowMessage(true);

           

           // window.location.replace('/dashboard');

            formik.resetForm();

            
           
        }
    });



    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);
    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) && <small className="p-error">{formik.errors[name]}</small>;
    };

   

    return (
        <div className="connexion">
             <svg xmlns="http://www.w3.org/2000/svg" className='connexion-svg'  viewBox="0 0 1036.323 1081.771">
                <path id="Tracé_1" data-name="Tracé 1" d="M918.042,1078.771c-205.238-150.8,2.332-357.925,2.332-357.925s193.577-163.519-25.655-383.361S894.719-2,894.719-2H-36V1078.771Z" transform="translate(36.5 2.5)" fill="rgba(36,58,129,0.79)" stroke="#707070" stroke-width="1"/>
            </svg>


            <div className="flex justify-content-center connexion-card">
                <div className="">
                    <h2 className="connexion-titre">Connexion</h2>
                    <form onSubmit={formik.handleSubmit} className="p-fluid">
                       
                        <div className="connexion-input-group ">
                            <span className="p-float-label p-input-icon-right">
                                <i className="pi pi-envelope" />
                                <InputText id="email" name="email" value={formik.values.email} onChange={formik.handleChange} className={classNames({ 'p-invalid': isFormFieldValid('email') })} />
                                <label htmlFor="email" className={classNames({ 'p-error': isFormFieldValid('email') })}>Email*</label>
                            </span>
                            {getFormErrorMessage('email')}
                        </div>
                        <div className="connexion-input-group ">
                            <span className="p-float-label">
                                <Password id="password" name="password" value={formik.values.password} onChange={formik.handleChange} toggleMask
                                    className={classNames({ 'p-invalid': isFormFieldValid('password') })} />
                                <label htmlFor="password" className={classNames({ 'p-error': isFormFieldValid('password') })}>Mot fr passe*</label>
                            </span>
                            {getFormErrorMessage('password')}
                        </div>

                        <div className="text-center mt-4" >
                            <a href="#" >
                                Mot de passe oublié ?
                            </a>
                        </div>
                        
                        <div className="connexion-container-boutton">

                        <Button type="submit" label="Valider" className="mt-5" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
                 

export default Connexion;