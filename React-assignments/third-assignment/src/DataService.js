import axios from "axios";

let dataServiceObj = {};
let url = `http://localhost:3000/products/`;
dataServiceObj.getAllProducts = ()=>{
    return axios.get(url);
}
dataServiceObj.createProduct = (obj)=>{
    return axios.post(url,obj);
}
dataServiceObj.updateProduct = (id,obj)=>{
    return axios.put(url+`/${id}`,obj);
}
dataServiceObj.getProduct = (id)=>{
    return axios.get(url+`/${id}`);
}
dataServiceObj.deleteProduct = (id)=>{
    return axios.delete(url+`/${id}`);
}
export default dataServiceObj;