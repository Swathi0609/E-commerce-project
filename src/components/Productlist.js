import "./Productlist.css";
import Navbar from "./components/Navbar";
import Announcement from "./components/Announcement";
import Products from "./components/Products";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function Productlist() {
  return (
    <div className="Productlist_container">
      <Navbar />
      <Announcement />
      <h1 className="tittle2">Dresses</h1>
      <div className="filtercontainer">
        <div className="filter filtertext">
          Filter Products:
          <select className="Select">
            <option disabled selected>
              Color
            </option>
            <option>White</option>
            <option>Black</option>
            <option>Red</option>
            <option>Blue</option>
            <option>yellow</option>
            <option>green</option>
            <option>violet</option>
          </select>
          <select className="Select">
            <option disabled selected>
              size
            </option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
            <option>XXL</option>
            <option>XXXL</option>
          </select>
        </div>
        <div className="filter filtertext">
          Sort products :
          <select className="Select">
            <option selected>Newest</option>
            <option>Price (asc)</option>
            <option>Price (desc)</option>
          </select>
        </div>
      </div>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
}
