export class ProductService {


    getProducts() {
        return fetch('data/api.json').then(res =>{
            console.log(res)
            return res.json()}).then(d => {
            console.log(d)
            return d.data
         });
    }


}
     