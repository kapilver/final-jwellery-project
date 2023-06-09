
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from './Components/Footer';
import Nav from "./Components/Nav";
import SignUp from './Components/SignUp'
import Login from './Components/login';
import AddProduct from './Components/AddProduct';
import PrivateComponent from './Components/PrivateComponent'
import ProductsList from './Components/ProductsList';
import UpdateProduct from './Components/UpdateProduct'
import ForgotPassword from './Components/forgotPassword';
import ResetPassword from './Components/Reset-password';
import AboutUs from './Components/AboutUs';
import FAQ from './Components/FAQ';
import DevileryInformation from './Components/DevileryInformation'
import Portfolio from './Components/Portfolio';
import Photogallery from './Components/Photogallery';
import Blogs from './Components/Blogs';
import Team from './Components/Team';
import Awards from './Components/Awards';
import Termsconditions from './Components/Termscondition';
import OtpVerify from './Components/Otp';

import PlatinumeProduct1 from "./Components/PhotoGallaryProductComponent/PlatinumProducts/PlatinumeProduct1";
import PlatinumeProduct2 from "./Components/PhotoGallaryProductComponent/PlatinumProducts/PlatinumeProduct2"
import PlatinumeProduct3 from "./Components/PhotoGallaryProductComponent/PlatinumProducts/PlatinumeProduct4"
import PlatinumeProduct4 from "./Components/PhotoGallaryProductComponent/PlatinumProducts/PlatinumeProduct3"


import GoldProduct1 from "./Components/PhotoGallaryProductComponent/GoldProducts/GoldProduct1";
import GoldProduct2 from "./Components/PhotoGallaryProductComponent/GoldProducts/GoldProduct2";
import GoldProduct3 from "./Components/PhotoGallaryProductComponent/GoldProducts/GoldProduct3";
import GoldProduct4 from "./Components/PhotoGallaryProductComponent/GoldProducts/GoldProduct4";

import DiamondProduct1 from "./Components/PhotoGallaryProductComponent/DiamondProducts/DiamondProduct1";
import DiamondProduct2 from "./Components/PhotoGallaryProductComponent/DiamondProducts/DiamondProduct2";
import DiamondProduct3 from "./Components/PhotoGallaryProductComponent/DiamondProducts/DiamondProduct3";
import DiamondProduct4 from "./Components/PhotoGallaryProductComponent/DiamondProducts/DiamondProduct4";



function App() {
  return (

    <div className="App">

      <BrowserRouter>
        <Nav />
        <Routes>

          <Route element={<PrivateComponent />}>

            <Route path="/" element={<ProductsList />} ></Route>
            <Route path="/add-product" element={<AddProduct />} ></Route>
            <Route path="/update/:id" element={<UpdateProduct />} ></Route>
            <Route path="/AboutUs" element={< AboutUs />} ></Route>
            <Route path="/logout" element={<h1>Logout listinng component</h1>} ></Route>
            <Route path="/profile" element={<h1>Profile listinng component</h1>} ></Route>
            <Route path="/FAQ" element={<FAQ />} ></Route>
            <Route path='/DevileryInformation' element={<DevileryInformation />}> </Route>
            <Route path='/Portfolio' element={<Portfolio />} ></Route>
            <Route path='/Photogallery' element={<Photogallery />} ></Route>
            <Route path='/Blogs' element={<Blogs />} ></Route>
            <Route path='/Team' element={<Team />} ></Route>
            <Route path='/Awards' element={<Awards />} ></Route>
            <Route path='/termscondition' element={<Termsconditions />} ></Route>


            {/* product route  */}

            <Route path='/PlatinumesProduct1' element={<PlatinumeProduct1 />} ></Route>
            <Route path='/PlatinumeProduct2' element={<PlatinumeProduct2 />} ></Route>
            <Route path='/PlatinumeProduct3' element={<PlatinumeProduct3 />} ></Route>
            <Route path='/PlatinumeProduct4' element={<PlatinumeProduct4 />} ></Route>

            <Route path='/GoldProduct1' element={<GoldProduct1 />} ></Route>
            <Route path='/GoldProduct2' element={<GoldProduct2 />} ></Route>
            <Route path='/GoldProduct3' element={<GoldProduct3 />} ></Route>
            <Route path='/GoldProduct4' element={<GoldProduct4 />} ></Route>

            <Route path='/DiamondProduct1' element={<DiamondProduct1 />} ></Route>
            <Route path='/DiamondProduct2' element={<DiamondProduct2 />} ></Route>
            <Route path='/DiamondProduct3' element={<DiamondProduct3 />} ></Route>
            <Route path='/DiamondProduct4' element={<DiamondProduct4 />} ></Route>
         


          </Route>

          <Route path="/SignUp" element={<SignUp />} ></Route>
          <Route path="/login" element={<Login />} ></Route>
          <Route path="/forgotPassword" element={<ForgotPassword />} ></Route>
          <Route path="/verifyOtp/:email" element={<OtpVerify />} ></Route>
          <Route path="/resetpassword/:email" element={<ResetPassword />} ></Route>
      


        </Routes>
      </BrowserRouter>
      <Footer />
    </div>

  );
}

export default App;
