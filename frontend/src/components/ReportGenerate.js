import React, { useState, useEffect } from 'react';
import jsPDF from 'jspdf';
import axios from "axios";
import { Link } from "react-router-dom";



import 'jspdf-autotable';

export default function ReportGenerate() {
  const [users, setUsers] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  function getUsers() {
    axios
      .get("http://localhost:8070/order/")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
    setSearchInput("");
  }

  useEffect(() => {
    getUsers();
  }, []);

  function handlePdfGeneration() {
    const doc = new jsPDF();

    // Set table header
    const header = [["Fuel Type", "Amount", "Order Date", "Delivery Date", "Price",]];

    // Add data rows
    const data = users.map(user => [user.fueltype, user.amount, user.orderdate, user.deliverydate, user.price]);

    // Add table to document
    doc.autoTable({ head: header, body: data });

    // Download the PDF document
    doc.save('Orders.pdf');
  }

  return (
    <body>

<div>
            <section id="sidebar">
                    {/* <br/><img className='brandLogo' src={require('./images/cpetcoLogo.png')} /><br/><br/> */}
                    <span class="brand">Morawaka Hot Kichen</span>
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
          <br>
          </br>
          <br>
          </br>
            <main>
                <div className="head-title">
                    <div className="left">
                        <h1>Monthly Report - Suppliers</h1>
                        <br></br>
                                
                    </div>
                </div>
                <div className="container">
                <div className="table">
                    <table className="table-striped">
                        <thead>
                        <tr>
                                <th>Supplier name</th>
                                <th>Address</th>
                                <th>Email</th>
                                <th>NIC</th>
                                <th>Contact Number</th>
                            <th></th>
                        </tr>
                        </thead>
                        
                        <tbody>
                        {users.map((i, index) => {
                            return (
                                <tr key={index}>
                                <td>{i.fueltype}</td>
                                <td>{i.amount}</td>
                                <td>{i.orderdate}</td>
                                <td>{i.deliverydate}</td>
                                <td>{i.price}</td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                    <button  className='btn btn-primary' onClick={handlePdfGeneration}>
                    Generate PDF
                </button>
                    </div>
                </div>
                
            </main>
        </section>
        
     </body>
  );
}