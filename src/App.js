import React, { Component,Suspense} from 'react';
import {Route, Routes,BrowserRouter } from "react-router-dom";
//import { PrivateRoute } from '../services/PrivateRoute';
import { ProgressSpinner } from 'primereact/progressspinner';
import './App.css';

const Connexion = React.lazy(()=> import('./views/connexion/Connexion'))
const Verification = React.lazy(() => import('./views/verification/Verification'))
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))




const loading = (
  <div className="justify-content-center align-content-center" style={{ display:'grid',height:'100vh' }}>
    <ProgressSpinner  color="primary" />
  </div>
)



//Contenu principal de l'application
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route  path="/connexion" name="connexion" element={<Connexion />} />
            <Route  path="/verification" name="verification" element={<Verification />} />
            <Route exact path="*" name="accueil" element={<Dashboard />} />
          </Routes>
        </Suspense>
      </BrowserRouter>

    );
  }
}

export default App;
