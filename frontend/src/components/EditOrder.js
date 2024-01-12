import React,{useState, useEffect} from "react";
import axios from "axios"
import { useParams, Link, useNavigate } from "react-router-dom";

export default function EditOrder(){

            const navigate = useNavigate();
            const {id} = useParams();
            const [users, setUsers] = useState({

              fueltype: '',
                Sname: '',
                Description: '',
                Status: '',
                date: '',
            });

            //Fetch data
            useEffect(()=>{
                function getUsers (){
                    axios.get("http://localhost:8070/order/get/"+id)
                    .then((res)=>{
                        setUsers(res.data.order);
                    }).catch((err)=>{
                        alert(err.message);
                    })
                }
                getUsers();
            },[id])

            const handleChange = (e) => {
                setUsers({
                  ...users,
                  [e.target.name]: e.target.value
                });
              };
            
              const handleSubmit = (e) => {
                e.preventDefault();
                console.log(users); // or save the data to your backend
                axios
                .put('http://localhost:8070/order/update/'+id, users)
                .then((response) => {
                    console.log(response.data);
                    alert("Supplier Updated");
                    navigate('/getOrder');
                })
                .catch((error) => {
                    console.log(error);
                });
              };
            

    return(
                <body>

<div>
            <section id="sidebar">
                    <br/><img className='brandLogo' src={require('./images/cpetcoLogo.png')} /><br/><br/>
                    <span class="brand">Morawaka Hotkichen</span>
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
                                        <li><i className='bx bx-chevron-right' ></i></li>
                                        <li>
                                            <a href="#">Edit Order</a>
                                        </li>
                                        {/* <li><i className='bx bx-chevron-right' ></i></li>
                                        <li>
                                            <a className="active" href="#">Edit Order</a>
                                        </li> */}
                                    </ul>
                                </div>
                            </div>
    
                            <div className="table-data">
                                <div className="order">
                                    <div className="head">
                                        <h3>Edit Order</h3>
                                    </div>
                                    <form onSubmit={handleSubmit} >
                                        
                                        {/* <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="name"  className="col-sm-2 col-form-label">FuelType</label>
                                            <input type="text" className="form-control form-control-user" name="fueltype" id="name" value={users.fueltype}
                                            onChange={handleChange}/>
                                        </div> */}

                                           {/* <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="inputState" className="col-sm-2 col-form-label">FuelType:</label>
                                            <select id="inputState" className="form-control form-control-user" value={users.fueltype}
                                                onChange={handleChange}>
                                            
                                                <option defaultValue>Choose...</option>
                                                <option >Petrol(92 Octane)</option>
                                                <option >Petrol(95 Octane)</option>
                                                <option > Diesel(Auto Diesel)</option>
                                                <option >Diesel(Lanka Super Diesel 4 star)</option>
                                                <option > Furnace Oil</option>
                                            </select>
                                        </div> */}

                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="inputState" className="col-sm-2 col-form-label">Supplier name</label>
                                            <input type="text" id="inputState" className="form-control form-control-user"  name="amount" value={users.Sname}
                                            onChange={handleChange}/>
                                        </div>

                                        {/* <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="email" className="col-sm-2 col-form-label">OrderDate</label>
                                            <input type="text"  className="form-control form-control-user" id="discription"  name="orderdate" value={users.orderdate}
                                            onChange={handleChange}/>
                                        </div>

                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="userName" className="col-sm-2 col-form-label">DeliveryDate</label>
                                            <input type="text"  className="form-control form-control-user" id="accountName" name="deliverydate" value={users.deliverydate}
                                            onChange={handleChange}/>
                                        </div> */}

                                        
                                     <div class="mb-3">

                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <label htmlFor="text" className="col-sm-2 col-form-label">Description:</label>
                                                <input type="text"className="form-control form-control-user" id="text" placeholder="Enter Description" value={users.Description}
                                                 onChange={handleChange}/>
                                            </div>

                                        </div>

                                        <div class="mb-3">
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="text" className="col-sm-2 col-form-label">Status:</label>
                                            <input type="text"className="form-control form-control-user" id="date" placeholder="Enter Status" value={users.Status}
                                                                                    onChange={handleChange}/>
                                        </div>

                                        </div>

                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label htmlFor="password" className="col-sm-2 col-form-label">Date</label>
                                            <input type="date" className="form-control form-control-user" id="amount" name="price" value={users.date}
                                            onChange={handleChange}/>
                                        </div>
                                        <br/>
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <button type="submit" className="btn btn-primary btn-sm">Save</button>
                                                <Link to={'/getOrder'}><button type="reset" className="btn btn-secondary btn-sm">Cancel</button></Link>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </main>
                    </section>
                </body>
    )
}