import { BrowserRouter, Routes, Route } from 'react-router-dom'
//import Header from './pages/Header'
import Navbar from './components/Navbar';
import AddSupplier from './components/AddSupplier';
import SupplierDetails from './components/SupplierDetails';
import Sidebar from './components/Sidebar';
import EditSupplier from './components/EditSupplier';
import "./components/App.css";
// import "./components/crud.css";
import PlaceOrder from './components/PlaceOrder';
import OrderDetails from './components/OrderDetails';
import "./components/Dashboard.css";
import EditOrder from './components/EditOrder';
import Dashboard from './components/Dashboard';
import ReportGenerate from './components/ReportGenerate';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div>
      {/* <Sidebar/> */}
        <Routes>
        <Route path="/getSup" element={<SupplierDetails/>}/>
          <Route path="/addSup" element={<AddSupplier/>}/>
          <Route path="/getOrder" element={<OrderDetails/>}/>
          <Route path="/addOrder" element={<PlaceOrder/>}/>
          <Route path='/EditSupplier/:id' element={<EditSupplier/>} />
          <Route path='/EditOrder/:id' element={<EditOrder/>} />
          <Route path='/getDashboard' element={<Dashboard/>} />
          <Route path='/report' element={<ReportGenerate/>} />
          <Route path='/' element={<Dashboard/>} />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
