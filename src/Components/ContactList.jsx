import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

export default function ContactList(props){
    const {contact, contactRemove} = props;
   
    const contactList = contact.map((value)=>{
        return(
            <div className='contlist'>
               <div >{value.data.name} </div>
               <div >{value.data.email}</div>
               <span onClick={()=>contactRemove(value.id)}><DeleteIcon/></span>
            </div>
        )
    }
    )
    
    return(
        <>
         <div className="contlist-header">Contact List</div>
        <div >{contactList}</div>

        </>
    );
}