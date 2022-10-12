


    import axiosIntance from '../../../api/axiosInstance'
    
    const userItem = 'tokendashlanfi';
    const tokenUser = localStorage.getItem(userItem)


  
export class ProductService {


    getSuperAdmins() {
        return axiosIntance.get('superadmin/').then((res)=>res.data.data);
    }
    getAdmins() {
        return axiosIntance.get('admins/').then((res)=>res.data.data);
    }
    getAgents() {
        return axiosIntance.get('agent/').then((res)=>res.data.data);
    }
    getRecPers() {
        return axiosIntance.get('vulnerablegs/').then((res)=>res.data.data);
    }
    getVulVie() {
        return fetch('https://apivulnerable.herokuapp.com/vulnerablecon/').then(res => res.json()).then(d => d.results);
    }
    getVulEtu() {
        return fetch('https://apivulnerable.herokuapp.com/vulnerableetud/').then(res => res.json()).then(d => d.results);
    }
    getVulPhy() {
        return fetch('https://apivulnerable.herokuapp.com/vulnerablephys/').then(res => res.json()).then(d => d.results);
    }
    getVulChom() {
        return fetch('https://apivulnerable.herokuapp.com/vulnerableoccup/').then(res => res.json()).then(d => d.results);
    }
    getDonateurs() {
        return fetch('https://apidons.herokuapp.com/listdonateur/').then(res => res.json()).then(d => d);
    }
    getArgent() {
        return fetch('https://apidons.herokuapp.com/listargea/').then(res => res.json()).then(d => d);
    }
    getNature() {
        return fetch('https://apidons.herokuapp.com/listnaturea/').then(res => res.json()).then(d => d);
    }
    getIndividus() {
        return fetch('https://apivulnerable.herokuapp.com/individus/').then(res => res.json()).then(d => d.data);
    }
    getMenages() {
        return axiosIntance.get('menage/').then((res)=>res.data.data);
    }
    getConditionsVie() {
        return fetch('https://apivulnerable.herokuapp.com/vulnerablecon/').then(res => res.json()).then(d => d.data);
    }
    getConditionsPhys() {
        return fetch('https://apivulnerable.herokuapp.com/vulnerablephys/').then(res => res.json()).then(d => d.data);
    }
    getChom() {
        return fetch('https://apivulnerable.herokuapp.com/vulnerableoccup/').then(res => res.json()).then(d => d.data);
    }
    getNiveauEtude() {
        return fetch('https://apivulnerable.herokuapp.com/vulnerableetud/').then(res => res.json()).then(d => d.data);
    }
    getAdminDetails(emailAdmin) {

  

        var requestOptions = {
            method: 'GET',
            headers: tokenUser ? {'Authorization': 'Bearer '+tokenUser}:{},
      
            redirect: 'follow'
          };

        return  fetch("https://apivulnerable.herokuapp.com/infoadmin/"+emailAdmin+"/", requestOptions)
          .then(response => response.json())
          .then(result => (result.chefs))
          .catch(error => console.log('error', error));
    }

    getAgentDetails(emailAgent) {

  

        var requestOptions = {
            method: 'GET',
            headers: tokenUser ? {'Authorization': 'Bearer '+tokenUser}:{},
      
            redirect: 'follow'
          };

        return  fetch("https://apivulnerable.herokuapp.com/infoagent/"+emailAgent+"/", requestOptions)
          .then(response => response.json())
          .then(result => (result))
          .catch(error => console.log('error', error));
    }
    getSADetails(emailAdmin) {

  

        var requestOptions = {
            method: 'GET',
            headers: tokenUser ? {'Authorization': 'Bearer '+tokenUser}:{},
      
            redirect: 'follow'
          };

        return  fetch("https://apivulnerable.herokuapp.com/infosuper/"+emailAdmin+"/", requestOptions)
          .then(response => response.json())
          .then(result => (result.chefs))
          .catch(error => console.log('error', error));
    }
    getAllZones() {
        return axiosIntance.get('zone/').then((res)=>res.data.data);
    }
    getAllAffectations() {
        return axiosIntance.get('affecter/').then((res)=>res.data.data)
    }
    getDeconnexion() {
        return axiosIntance.get('logout/blacklist/').then((res)=>res.data.data)
    }

    getAllCommunes() { 
        
        var requestOptions = {
        method: 'GET',
        headers: tokenUser ? {'Authorization': 'Bearer '+tokenUser}:{},
  
        redirect: 'follow'
      };

    return  fetch("https://data.gouv.ci/data-fair/api/v1/datasets/liste-des-circonscriptions-administratives-et-des-communes/lines?size=252&select=COMMUNE", requestOptions)
      .then(response => response.json())
      .then(results => (results.results))
      .catch(error => console.log('error', error));
     }

      getAllCriteresChef() { 
        
        var requestOptions = {
        method: 'GET',
      
        redirect: 'follow'
      };

    return  fetch("http://apivulnerable.herokuapp.com/criterechef/", requestOptions)
      .then(response => response.json())
      .then(results => (results))
      .catch(error => console.log('error', error)); }
  
      getDetailsIndividus(id) {

  

        var requestOptions = {
            method: 'GET',
            headers: tokenUser ? {'Authorization': 'Bearer '+tokenUser}:{},
      
            redirect: 'follow'
          };

        return  fetch("https://apivulnerable.herokuapp.com/information/"+id+"/", requestOptions)
          .then(response => response.json())
          .then(result => result.chefmenage)
          .catch(error => console.log('error', error));
    }
  


}
    