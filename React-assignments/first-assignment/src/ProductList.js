import React from 'react';
import ProductDetails from './ProductDetails';

// Parent Component
class ProductList extends React.Component
{
    constructor()
    {
      super();
      this.state =  
       {         
        products : [
          {pno:1,unitprice : 100000, pname : "Laptops",  quantity :  1} ,
          {pno:2 , unitprice : 80000, pname : "Iphone",  quantity :  3},
          {pno:3, unitprice : 40000, pname : "Ipad",  quantity :  11},
          {pno:3, unitprice : 40000, pname : "Mobiles",  quantity :  11},
         ]
       };

    } 


    
    render()
    {

      var result =  this.state.products.map ( item =>        
                     {
                              return <ProductDetails prodObj={item}/>
                     } 
                    );

      return (
        <div style={{marginLeft:"5%", marginRight : "5%", width:"90%"}}>
              <h3 align="center">Parent - Child Communication in React Applications </h3>
              <hr/>
              {result}              
         </div>  
        );
    }
}

export default ProductList;