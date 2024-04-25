import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes, useParams } from "react-router-dom";
import { Header } from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Dress from "./components/Women/Women";
import MultipleItems from "./components/Home/Home";
import { meraStore } from "./store/store";
import { Provider } from "react-redux";
import ProductDetails from "./components/Product-details/Product-details";
import { Card } from "./components/Card/Card";
import Footer from "./components/Footer/footer";
import axios from "axios";
import Cart from "./components/Cart/cart";


function SearchResults() {

  let param = useParams();
  let [reslt, setREsult] = useState([])

  useEffect(()=>{

    axios.post('/search-item', { query: param.query }).then((resp) => {
      setREsult(resp.data)      
    })
    
  },[])


  return <div style={{width:"95%"}} className="mx-auto d-flex flex-wrap ">
    {reslt.map((itemss) => {
     return  <div className="w-25 px-4 overflow-hidden ">
          <Link to={"/products/" + itemss.url}> <img className="w-100" src={"/"+itemss.image} alt="" />
          <h5 style={{ marginTop: "15px" }}>{itemss.title}</h5>
          <p>{itemss.price}</p>
          </Link>
        </div>
    })}
    </div>
    }

function Notfound() {

  return <h2>page not found</h2>
}

function App() {

  return (
    <>
      <Provider store={meraStore}>
        <BrowserRouter>
          {/* <Menubar /> */}
          <Header />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Banner />
                  <MultipleItems />
                  <Card />
                  </>
              }
            />
            <Route path="/search/:query" element={<SearchResults />} />
            <Route path="/collections/:abc" element={<Dress />} />
            <Route path="/products/:asdf" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
