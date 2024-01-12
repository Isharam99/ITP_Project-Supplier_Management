import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function OrderDetails() {
  const [orders, setOrders] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [updateState, setUpdateState] = useState(-1);

  // Fetch data
  function getOrders() {
    axios
      .get("http://localhost:8070/order/")
      .then((res) => {
        console.log(res.data);
        setOrders(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
    setSearchInput("");
  }

  useEffect(() => {
    getOrders();
    console.log(orders)
  }, []);







  // Delete data
  function deletedata(order) {
    if (window.confirm('Do you want to delete "' + order.amount + '" ?')) {
      axios
        .delete("http://localhost:8070/order/delete/" + order._id)
        .then(() => {
          getOrders();
        })
        .catch((err) => {
          alert(err);
        });
    }
  }

  // Search data
  function searchOrders() {
    if (searchInput !== "") {
      axios
        .get(`http://localhost:8070/order/search/${searchInput}`)
        .then((res) => {
          setOrders(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    } else {
      getOrders();
    }
  }

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      searchOrders();
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
                            Feedback Management
                            </a>
                        </li>
                    </ul>
                </div>
                <Link to={"/addOrder"} className="btn-download">
                    <i className="bx bx-user-plus"></i>
                    <span className="text">Insert Supplier Feedback</span>
                </Link>
                
                </div>

                <div className="table-data">
                    <div className="order">
                        <div className="head">
                            <h3>All Feedback</h3>
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
          
            <th></th>
            <th>Supplier name</th>
            <th>Description</th>
            <th>Status</th>
            <th>Date</th>
           
            
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              
              <td>{order.fueltype}</td>
              <td>{order.amount}</td>
              {/* <td>{order.orderdate}</td>
              <td>{order.deliverydate}</td>
              <td>{order.price}</td> */}
              
              <td>
  <a href={`/EditOrder/${order._id}`}>
    <button
      type="button"
      className="btn btn-primary btn-sm">
      Edit
    </button>
  </a>
</td>

             
              <td>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={(()=>deletedata(order))}
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

export default OrderDetails;