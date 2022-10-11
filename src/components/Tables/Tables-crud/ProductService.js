export class ProductService {


    getProducts() {
        return     axios.get(`https://apivulnerable.herokuapp.com/aladmin/`)  
        .then(res => {  
         
            return res.data.results
        
          
        })
        
    }


}
     
