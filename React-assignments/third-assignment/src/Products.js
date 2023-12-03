
import React, { useEffect, useState } from "react";
import axios from "axios";
import dataServiceObj from "./DataService";


function Products() {

    let [productsArray, setProducts] = useState([]);
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [unitprice, setUnitprice] = useState("");
    const [category, setCategory] = useState("");
    

    const getData = ()=>
    {
      dataServiceObj.getAllProducts().then( (resData) => {   
        setProducts(resData.data);
      });
    };


    function addProduct()
    {
      let prodObj = {};
      prodObj.name = name;
      prodObj.category = category;
      prodObj.unitprice = unitprice; 
      prodObj.quantity = 2;

      // console.log(deptObj);
      dataServiceObj.createProduct(prodObj).then( (resData) => {          
          alert("New Prod is added to database");
          getData();
      });

      
    }

    function selectProd(pno)
    {
      dataServiceObj.getProduct(pno).then( 
          resData => 
          {
            let prodObj = resData.data;        
            setName(prodObj.name);
            setCategory(prodObj.category);
            setUnitprice(prodObj.unitprice);
            setId(prodObj.id);
          })
          .catch((error) => {
              alert(error);
              console.log(error);
          });
    }


    function updateProduct()
    {
      let prodObj = {};
      prodObj.name = name;
      prodObj.category = category;
      prodObj.unitprice = unitprice; 

      dataServiceObj.updateProduct(id,prodObj).then( resData => {
        getData();
        alert("Selected Product are updated to database");
      }); 
    }

    function removeProd(pno)
    {
      let confirmDelete  = window.confirm("Are you sure you want to delete?");

      if(confirmDelete == true)
      {
        dataServiceObj.deleteProduct(pno).then( resData => 
          {
             alert("Selected Prod details are deleted from server...!");
             getData();
          });
      }
    }

    let resultsArray  = productsArray.map( item =>  
        <tr>
          <td>  {item.name} </td>
          <td>  {item.category} </td>
          <td>  {item.unitprice} </td>
          <td>
               <a href="javascript:void(0);" onClick={ () => removeProd(item.id)}> Delete </a>  |   
               <a href="javascript:void(0);" onClick={ () => selectProd(item.id)}> Select </a>  |   
          </td>
        </tr>);
         



  return (
      <div>
        <h3>CRUD Operations on JSON Server - using Axios</h3>
        <hr/>
            <input type="text" value={name} placeholder="Name"  
            onChange={(event) => setName(event.target.value)}   />
            
            <input type="text" value={category} placeholder="Category"  
            onChange={(event) => setCategory(event.target.value)}   />
             <input type="text" value={unitprice} placeholder="Unitprice"  
            onChange={(event) => setUnitprice(event.target.value)}   />

            <br/><br/>  

            <input type="button"  onClick={getData} value="Get Products"  />      
            <input type="button"  onClick={addProduct} value="Add Product"  />
            <input type="button"  onClick={updateProduct} value="Update Product"  />
        <br/><br/>    

        <table border="2"> 
                <tr>
                   <th>Product Name</th>
                   <th>Unit Price</th>
                   <th>Quantity</th>   
                   <th></th>                   
               </tr> 

                {resultsArray}  
            </table> 
    </div>
  );
}

export default Products;
