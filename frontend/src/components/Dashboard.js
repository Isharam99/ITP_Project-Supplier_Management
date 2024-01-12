import React,{useState, useEffect} from "react";
import axios from "axios";

function SupplierDashboard(){


    const [users, setUsers] = useState([]);
    const [orders, setOrders] = useState([]);

    //Fetch data
    useEffect(()=>{
        function getUsers (){
            axios.get("http://localhost:8070/supplier/")
            .then((res)=>{
                setUsers(res.data);
            }).catch((err)=>{
                alert(err.message);
            })
        }
        getUsers();
    },[])

     //Fetch data
     useEffect(()=>{
        function getorders (){
            axios.get("http://localhost:8070/order/")
            .then((res)=>{
                setOrders(res.data);
            }).catch((err)=>{
                alert(err.message);
            })
        }
        getorders();
    },[])

    const length = users.length;
    const number = orders.length;

    return(
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
                                <h1>Dashboard</h1>
                                <ul className="breadcrumb">
                                    <li>
                                        <a href="#" className='active'>Dashboard</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <ul className="box-info">
                            <li>
                            <i className='bx bxs-user' undefined ></i>
                                <span className="text">
                                    <h3>{ length }</h3>
                                    <p>Total Suppliers</p>
                                </span>
                            </li>
                        
                            <li>
                            <i class='bx bxs-gas-pump'></i>
                                <span className="text">
                                    <h3>{ number }</h3>
                                    <p>Total Orders</p>
                                </span>
                            </li>
                        </ul>
                    </main>
                </section>
            </body>
    )
}

export default SupplierDashboard