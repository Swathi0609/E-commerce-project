import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import Dress from "./components/Dress";
import SingleDressItem from "./components/SingleDressItem";
import Navbar from "./components/Navbar.js";
import Cart from "./components/Cart";
import { useEffect, useState } from "react";
import Register from "./components/Register";
import Signin from "./components/Login";

function App() {
  const [count, setCount] = useState(0);
  const [cart, setCartobj] = useState([]);
  const [btnClicked, setBtnClicked] = useState(1);
  function setcount(title, price, img, quantity) {
    setCount((prevCount) => prevCount + 1);
    setCartobj((current) => [
      ...current,
      { title: title, price: price, img: img },
    ]);
    console.log(count);
  }
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  console.log(cart);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home count={count} setcount={setcount} />} />
        <Route
          path="/:userId"
          element={
            <>
              <Navbar count={count} />
              <Dress setcount={setcount} />
            </>
          }
        />
        <Route
          exact
          path="/KURTIS/:userId"
          element={
            <>
              <Navbar />
              <SingleDressItem />
            </>
          }
        />
        <Route
          exact
          path="/LONGFROCK/:userId"
          element={
            <>
              <Navbar />
              <SingleDressItem />
            </>
          }
        />
        <Route
          exact
          path="/LOUNGEWEARLOVE/:userId"
          element={
            <>
              <Navbar />
              <SingleDressItem />
            </>
          }
        />
        <Route
          exact
          path="/LIGHTJACKETS/:userId"
          element={
            <>
              <Navbar />
              <SingleDressItem />
            </>
          }
        />
        <Route
          exact
          path="/SHIRTPRODUCTS/:userId"
          element={
            <>
              <Navbar />
              <SingleDressItem />
            </>
          }
        />
        <Route path="/cart" element={<Cart products={cart} />} />
        <Route path="/HOME" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
}
export default App;
