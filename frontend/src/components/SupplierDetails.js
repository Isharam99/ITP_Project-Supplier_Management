import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function SupplierDetails() {
  const [suppliers, setSuppliers] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [updateState, setUpdateState] = useState(-1);

  // Fetch data
  function getSuppliers() {
    axios
      .get("http://localhost:8070/supplier/")
      .then((res) => {
        setSuppliers(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
    setSearchInput("");
  }

  useEffect(() => {
    getSuppliers();
  }, []);





  // Delete data
  function deletedata(supplier) {
    if (window.confirm('Do you want to delete "' + supplier.name + '" ?')) {
      axios
        .delete("http://localhost:8070/supplier/delete/" + supplier._id)
        .then(() => {
          getSuppliers();
        })
        .catch((err) => {
          alert(err);
        });
    }
  }

  // Search data
  function searchSuppliers() {
    if (searchInput !== "") {
      axios
        .get(`http://localhost:8070/supplier/search/${searchInput}`)
        .then((res) => {
          setSuppliers(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    } else {
      getSuppliers();
    }
  }

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      searchSuppliers();
    }, 1000);
    return () => clearTimeout(delayDebounceFn);
  }, [searchInput]);

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
                            Supplier Management
                            </a>
                        </li>
                    </ul>
                </div>
                <Link to={"/addSup"} className="btn-download">
                    <i className="bx bx-user-plus"></i>
                    <span className="text">Add Supplier</span>
                </Link>
                </div>

                <div className="table-data">
                    <div className="order">
                        <div className="head">
                            <h3>All Suppliers</h3>
                            <div class="col-auto">
                                <div class="input-group mb-2">
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="inlineFormInputGroup"
                                        placeholder="Search"
                                        value={searchInput}
                                        onChange={(e) => setSearchInput(e.target.value)}/>
                                    <div class="input-group-prepend" >
                                        <div class="input-group-text">
                                            <i class="bx bx-x"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>

                    <table className="table-striped" >
               <thead>
                 <tr>
          
                   <th>Name</th>
                   <th>Address</th>
                   <th>Email</th>
                   <th>NIC</th>
                   <th>Contact Number</th>
            
                 </tr>
               </thead>
               <tbody>
                 {suppliers.map((supplier) => (
            <tr key={supplier._id}>
              
              
              <td>{supplier.name}</td>
              <td>{supplier.address}</td>
              <td>{supplier.email}</td>
              <td>{supplier.NIC}</td>
              <td>{supplier.contactNumber}</td>
              
              <td>
  <a href={`/EditSupplier/${supplier._id}`}>
    <button
      type="button"
      className="btn btn-primary btn-sm"
    >
      Edit
    </button>
  </a>
</td>

             
              <td>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={(()=>deletedata(supplier))}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
                </div>
            </div>
        </main>
    </section>
</body>


    )
}

export default SupplierDetails;