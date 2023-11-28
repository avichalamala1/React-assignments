import React from 'react';
 
import './ProdDetails.css';

// Child Component
class ProductDetails extends React.Component
{
    constructor(props)
    {
       super( props ); 
       this.state =  { totalAmount : this.props.prodObj.quantity >10 ?
    ((this.props.prodObj.unitprice * this.props.prodObj.quantity) -  (this.props.prodObj.unitprice * this.props.prodObj.quantity)*0.1)
    :(this.props.prodObj.unitprice * this.props.prodObj.quantity) };
    } 


   
    
   
	render() { 
  return (
     <div  id="div1">
                   <h3 style={{margin: "2px", color:"Red"}}> {this.props.prodObj.pname} </h3>
                    <u> Prodno : {this.props.prodObj.pno} </u>  <br/>
                    <u> Unit price : {this.props.prodObj.unitprice} </u>  <br/>
                    <u> Quantity : {this.props.prodObj.quantity} </u>  <br/>
                     Total amount : <span style={{color:"Green"}}> {this.state.totalAmount} </span>   <br/>       
                    
            </div>);
}
}

export default ProductDetails; 



