import React, { useState } from "react";

export default function AddContact({addContact}){
    const [contactData, setContactData] = useState({name:"", email:""});
    const handleChange=(e)=>{
        if(e.target.name === "name")
            setContactData({...contactData, name: e.target.value})
        else
            setContactData({...contactData, email: e.target.value})
    };
   const handleAdd=()=>{
        if(contactData.name === "" || contactData.email === ""){
            alert('Please fill all the data');
            return
        }
        else{
        addContact(contactData); 
        setContactData({name: "", email: ""});
        }
        
   }

    return(
        <div className='formHeader'>
            <div className="add-contact">Add Contact:</div>

            <form className="form">
            <div className="name">
               <label>Name:</label><br/>
               <input type='text' placeholder="Enter Name" name='name'  
                value={contactData.name} onChange={handleChange}></input>
            </div>

                <br/>
                <br/>

             <div className="email">   
               <label>Email</label><br/>
               <input  type='email' placeholder="Enter Email" name='email' 
                vlaue={contactData.email} onChange={handleChange}></input>
             </div>   
            </form>
            <button onClick={handleAdd}>Add Contact</button>
            </div>
    );
}