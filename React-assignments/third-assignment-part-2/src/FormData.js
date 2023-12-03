import { useState, useRef, useEffect } from 'react';
import './App.css';



function FormData() {


    const  inputRef = useRef(null);	


    const [ownername, setOwnername] = useState("");
    const [contactNo, setContactno] = useState("");
    const [vehicleModel, setVehiclemodel] = useState("");
    const [registrationno, setRegistrationno] = useState("");
    const [vehiclecolor, setVehiclecolor] = useState("");

    const [result, setResult] = useState("");

    const [errorsObj, setErrorsObj] = useState({
        ownername: "",
        contactNo: "",
        vehicleModel: "",
        registrationno: "",
        vehiclecolor:""
    });


        
   // useEffect help us here to execute code while component loading
    useEffect( () =>  { inputRef.current.focus(); }, []);    



    function handleSubmit(event)
    {
        event.preventDefault();

        const validPhoneno = RegExp(/^(\+\d{1,3}[- ]?)?\d{10}$/i);
        const registratinValid = RegExp(/^[A-Z]{2}[ -][0-9]{1,2}(?: [A-Z])?(?: [A-Z]*)? [0-9]{4}$/i);

        let tempErrorObj = Object.assign({}, errorsObj);
        tempErrorObj.ownername =  (ownername.length == 0)?"Owner Name is required":"";
        tempErrorObj.contactNo =  validPhoneno.test(contactNo)? "":"Please enter valid phone no" ;
        tempErrorObj.vehicleModel =  (vehicleModel.length== 0)? "Vehicle model is required ": "";
        tempErrorObj.registrationno =  registratinValid.test(registrationno)? '': 'Registration nno is not valid!';
        tempErrorObj.vehiclecolor =  vehiclecolor.length == 0? 'Vehicle color is required': '';

        setErrorsObj(tempErrorObj);  

        let valuesArray = Object.values(tempErrorObj); 
        let index = valuesArray.findIndex( item => item.length != 0 );

        if(index == -1)
        {
            // send data to server using ajax calls 
            // alert("You have entered valid data.")
            setResult("You have entered valid data.")
        }
        else
        {
            // alert("You have entered invalid data. Please enter valid data.")
            setResult("You have entered invalid data. Please enter valid data.")
        }
        


    }



    return (
        <>
            <h3>Performing form validations in React JS</h3>
            <hr />

            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Vehicle Registration</legend>

                    Owner Name  :  
                            <input type="text"  name="ownername" ref={inputRef}
                              onChange={(e) => setOwnername(e.target.value)}  />
                    <span class="error">{errorsObj.ownername}</span>
                    <br/><br/>

                    Contact no  :  <input type="text" name="password" onChange={(e) => setContactno(e.target.value)}  />
            <span class="error">{errorsObj.contactNo}</span>
            <br/><br/>


            Model  :  <input type="text" name="model" onChange={(e) => setVehiclemodel(e.target.value)}  />
            <span class="error">{errorsObj.vehicleModel}</span>
            <br/><br/>

           Registration :  <input type="text" name="registrationNo" onChange={(e) => setRegistrationno(e.target.value)}  />
            <span class="error">{errorsObj.registrationno}</span>
            <br/><br/>
            Vehicle Color :  <input type="text" name="vehiclecolor" onChange={(e) => setVehiclecolor(e.target.value)}  />
            <span class="error">{errorsObj.vehiclecolor}</span>
            <br/><br/>

            <input type="submit" value="Register" /> 

            <h3>{result}</h3>

                </fieldset>
            </form>

        </>
    );
}


export default FormData;