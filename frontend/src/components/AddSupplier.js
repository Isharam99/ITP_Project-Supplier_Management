import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function AddSupplier(){

    const navigate= useNavigate();
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [NIC, setNIC] = useState("");
    const [contactNumber, setcontactNumber] = useState("");

    function sendData(e){
        e.preventDefault();
        
        const newsupplier = {
            name,
            address,
            email,
            NIC,
            contactNumber
        }
        

        axios.post("http://localhost:8070/supplier/add" , newsupplier).then(()=>{
            alert("Supplier added");

            setName("");
            setAddress("");
            setEmail("");
            setNIC("");
            setcontactNumber("");
        
        }).catch((err)=>{
            alert(err)
        })
        
        }

    


     return (


    <body>

<div>
            <section id="sidebar">
                    <br/><img className='brandLogo' src={require('./images/cpetcoLogo.png')} alt='logo' /><br/><br/>
                    <span class="brand">J.J. Dias Enterprises</span>
                    <ul className="side-menu top">
                        <li>
                            <a href="/getDashboard">
                                <i className='bx bxs-dashboard' ></i>
                                <span className="text">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a href="/getOrder">
                                <i class='bx bx-user'></i>
                                <span className="text">Order Management</span>
                            </a>
                        </li>
                        <li>
                        <a href="/getSup">
                                <i className='bx bxs-analyse'></i>
                                 <span className="text">Supplier Management</span>
                            </a>
                        </li>
                        <li>
                            <a href="/report">
                            <i className='bx bx-cloud bx-flip-horizontal' ></i>
                                <span className="text">Generate Report</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="logout">
                                <i className='bx bx-exit'></i>
                                <span className="text">Logout</span>
                            </a>
                        </li>
                    </ul>
                </section>

        </div>








    <section id="content">
        <main>
            <div className="head-title">
                <div className="left">
                    <h1>Supplier Management</h1>
                    <ul className="breadcrumb">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <i className="bx bx-chevron-right"></i>
                        </li>
                        <li>
                            <a className="active" href="#">
                            Add Supplier
                            </a>
                        </li>
                    </ul>
                </div>
                </div>

                <div className="table-data">
                    <div className="order">
                        <div className="head">
                            <h3>Add Supplier</h3>
                            <div class="col-auto">
                                <div class="input-group mb-2">
                                </div>
                            </div>
                    </div>

                    <form onSubmit={sendData}>
                   <div class="mb-3">
                   <div className="col-sm-6 mb-3 mb-sm-0">
                 <label for="name" >Name:</label>
                 <input type="text" class="form-control" id="name" placeholder="Enter Supplier Name" 
            onChange={(e)=>{

                setName(e.target.value);
            }}/></div>
    
            </div>

            <div class="mb-3">
            <div className="col-sm-6 mb-3 mb-sm-0">
            <label for="address" >Address:</label>
            <input type="text" class="form-control" id="address" placeholder="Enter Supplier Address"
            onChange={(e)=>{

                setAddress(e.target.value);
            }}/></div>
    
            </div>

            <div class="mb-3">
            <div className="col-sm-6 mb-3 mb-sm-0">
            <label for="email" >Email:</label>
            <input type="email" class="form-control" id="email" placeholder="Enter Supplier Email"
            onChange={(e)=>{

                setEmail(e.target.value);
            }}/></div>
    
            </div>

            <div class="mb-3">
            <div className="col-sm-6 mb-3 mb-sm-0">
            <label for="NIC" >NIC:</label>
            <input type="text"  class="form-control" id="NIC" placeholder="Enter Supplier NIC"
            onChange={(e)=>{

                setNIC(e.target.value);
            }}/></div>
    
            </div>

            <div class="mb-3">
            <div className="col-sm-6 mb-3 mb-sm-0">
            <label for="contactNumber" >Contact Number:</label>
            <input type="text" pattern="[0-9]{9}[0-9]{1}" class="form-control" id="contactNumber" placeholder="Enter Supplier Contact Number"
            onChange={(e)=>{

                setcontactNumber(e.target.value);
            }}/></div>
    
            </div>
            <div className="submit">
            <button type="submit" className="btn btn-outline-success btn-sm">Add Supplier</button>
            <Link to={`/getSup`}><button type="button" className="btn btn-outline-danger  btn-sm">Cancel</button></Link>
            </div>
        </form>
        </div>
            </div>
        </main>
    </section>
</body>
    )
}