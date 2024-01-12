import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function AddFeedback(){

    const [Sname, setSname] = useState("");
    const [Description, setDescription] = useState("");
    const [Status, setStatus] = useState("");
    const [date, setdate] = useState("");

    function sendData(e){
        e.preventDefault();
        
        const newOrder = {
           Sname,
           Description,
           Status,
           date,
        }
        

        axios.post("http://localhost:8070/feedback/add" , newOrder).then(()=>{
            alert("Feedback Added");

            setSname("");
            setDescription("");
            setStatus("");
            setdate("");
    
        
        }).catch((err)=>{
            alert(err)
        })
        
        }

    


     return (
        


    <body>

<div>
            <section id="sidebar">
                    <br/><img className='brandLogo' src={require('./images/cpetcoLogo.png')} /><br/><br/>
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
                                <span className="text">Feedback Management</span>
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
                    <h1>Feedback Management</h1>
                    <ul className="breadcrumb">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <i className="bx bx-chevron-right"></i>
                        </li>
                        <li>
                            <a className="active" href="#">
                            Add Feedback
                            </a>
                        </li>
                    </ul>
                </div>
                </div>

                <div className="table-data">
                    <div className="order">
                        <div className="head">
                            <h3>Add Feedback</h3>
                            <div class="col-auto">
                                <div class="input-group mb-2">
                                </div>
                            </div>
                    </div>

                    <form onSubmit={sendData}>
                   <div class="mb-3">    
            <div className="col-sm-6 mb-3 mb-sm-0">
                                    
                                        </div>
    
            </div>

            <div class="mb-3">
            <div className="col-sm-6 mb-3 mb-sm-0">
            <label for="address" >Supplier Name:</label>
            <input type="text" class="form-control" id="amount" placeholder="Enter Supplier name"
            onChange={(e)=>{

                setSname(e.target.value);
            }}/>
            </div>
            </div>

            <div class="mb-3">

           <div className="col-sm-6 mb-3 mb-sm-0">
                <label htmlFor="date" className="col-sm-2 col-form-label">Description:</label>
                <input type="text"className="form-control form-control-user" id="date" placeholder="Enter Description" onChange={(e) =>{
                setDescription(e.target.value);}}/>
            </div>
    
            </div>

            <div class="mb-3">
            <div className="col-sm-6 mb-3 mb-sm-0">
                <label htmlFor="date" className="col-sm-2 col-form-label">Status:</label>
                <input type="text"className="form-control form-control-user" id="date" placeholder="Enter Status" onChange={(e) =>{
                setStatus(e.target.value);}}/>
            </div>
    
            </div>

            <div class="mb-3">
            <div className="col-sm-6 mb-3 mb-sm-0">
            <label for="price" >Date:</label>
            <input type="date" class="form-control" id="price" placeholder="Enter date"
            onChange={(e)=>{

                setdate(e.target.value);
            }}/>
            </div>

            </div>
            <div className="submit">
            <button type="submit" className="btn btn-outline-success btn-sm">Add Feedback</button>
            <Link to={`/getOrder`}><button type="button" className="btn btn-outline-danger  btn-sm">Cancel</button></Link>
            </div>
        </form>
        </div>
            </div>
        </main>
    </section>
</body>
    )
}