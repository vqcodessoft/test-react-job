import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios'
//import "./AddEdit.css"



function EditFields() {

    const [state, setState] = useState({
     name: "",
     email:"",
    address: ""
    
    })
     const { name,email, address} = state

    const navigate = useNavigate();
    const { id } = useParams()

    const handleInputChange = (e) => {
        console.log(e.target.value)
        setState({...state,[e.target.name]:e.target.value})
        


    }

    
         
 
    


    useEffect(()=>{
        loadUser()
    },[])

const handleSubmit =async (e)=>{
    e.preventDefault()
        await axios.put(`http://localhost:8000/company/${id}`,state)
        navigate("/home")

}


const loadUser =async () =>{
    const result = await axios.get(`http://localhost:8000/company/${id}`)
    console.log(result)
    setState(result.data)
}





    return (
        <>
            <div style={{ marginTop: "100px" }}>
                {/* <form
                    style={{
                        margin: "auto",
                        padding: "15px",
                        maxWidth: "400px",
                        alignContent: "center"
                    }}
                    onSubmit={e=>handleSubmit(e)}
                > */}
                <form>
                    <div>
                        <label htmlFor='name'>Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter Name..."
                            onChange={e=>handleInputChange(e)}
                            value={name}
                        />
                    </div>
                    <div>
                        <label htmlFor='address'>Email</label>
                        <input
                            type="email"
                            id="address"
                            name="address"
                            placeholder="Enter Email..."
                            onChange={e=>handleInputChange(e)}
                            value={value}
                        />
                    </div>
                    <div>
                        <label htmlFor='address'>Address</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            placeholder="Enter address..."
                            onChange={e=>handleInputChange(e)}
                            value={address}
                        />
                    </div>
                   
                   
                  
                    {/* <input style={{ width: "50%", background: "orange", color: "white", padding: "5px", margin: "6px" }}
                        type="submit"
                        value={id ? "Update" : "Add "}
                       /> */}

                            <div>              
                                <button type="submit" className='btn btn-primary' onClick={e=>handleSubmit(e)}>Update </button>&nbsp;
                               
                            </div>

                </form>

            </div>
        </>
    )
}
export default EditFields;