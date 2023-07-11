import "./cart.css";
import Announcement from "./Announcement";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Add, Remove } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Cart(props) {
  const [itemCount, setItemCount] = useState(1);
  function handlePlus(e) {
    console.log(e);
    setItemCount(itemCount + 1);
  }
  function handleMinus() {
    setItemCount(itemCount - 1);
  }
  var x = JSON.parse(localStorage.getItem("cart"));

  const [subtotal, setSubtotal] = useState(0);
  const [amountToBePaid, setAmount] = useState(0);
  var total = 0;
  var discount;

  // Display the list of array objects
  console.log(x);

  // Declare a new array
  let newArray = [];

  // Declare an empty object
  let uniqueObject = {};

  // Loop for the array elements
  for (let i in x) {
    // Extract the title
    let objTitle = x[i]["title"];

    // Use the title as the index
    uniqueObject[objTitle] = x[i];
  }

  // Loop to push unique object into array
  for (let i in uniqueObject) {
    newArray.push(uniqueObject[i]);
  }

  // Display the unique objects
  console.log(newArray);

  let counter = {};

  x.forEach(function (obj) {
    var key = obj["title"];
    counter[key] = (counter[key] || 0) + 1;
  });
  console.log(counter);

  x.map((item) => {
    var price = Number(item.price.slice(1, item.price.length));

    console.log(price);
    total = total + price;
  });
  useEffect(() => {
    setSubtotal(total);
    setAmount(0.5 * (subtotal + (x.length == 0 ? 0 : 99)));
  });
  // useEffect(() => {
  //   setAmount(0.5 * subtotal);
  // }, []);
  return (
    <div className="cart_container">
      <Navbar />
      <Announcement />
      <div className="cart_wrapper">
        <h1 className="cart_tittle">YOUR BAG</h1>
        <div className="cart_top">
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <button className="cart_topbtn">CONTINUE SHOPPING</button>
          </Link>
          <div className="toptexts">
            <span className="toptext">Shopping Bag(2)</span>
            <span className="toptext">Your Wishlist(0)</span>
          </div>

          <button className="cart_topbtn" type="filled">
            CHECKOUT NOW
          </button>
        </div>
        <div className="cart_bottom">
          <div className="cart_info">
            {x.length == 0 ? (
              <h1 className="null_items">NO CART ITEMS</h1>
            ) : (
              newArray.map((item) => {
                return (
                  <div className="cart_product">
                    <div className="productdetail">
                      <img className="cart_image" src={item.img} />
                      <div className="details">
                        <div className="productname">
                          <b>Product:</b>
                          {item.title}
                        </div>
                        <div className="product_id">
                          <b>ID:</b>9876543230
                        </div>

                        <div className="product_color"></div>
                        <div className="productsize">
                          <b>size:</b>37.5
                        </div>
                      </div>
                      <div className="pricedetail">
                        <div className="productamountcontainer">
                          <div>
                            <Add></Add>
                          </div>
                          <div className="productamount">
                            {counter[item.title]}
                          </div>
                          <div>
                            <Remove />
                          </div>
                        </div>
                        <div className="productprice">{item.price}</div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
          <div className="cart_summary">
            SUMMARY
            <h1 className="summarytittle">ORDER SUMMARY</h1>
            <div className="summaryitem">
              <span className="summaryitemtext">Subtotal</span>
              <span className="summaryitemprice">{`₹${subtotal}`}</span>
            </div>
            <div className="summaryitem">
              <div className="summaryitemtext">Estimated shipping</div>
              <div className="summaryitemprice">
                {x.length == 0 ? "₹0" : "₹99"}
              </div>
            </div>
            <div className="summaryitem">
              <div className="summaryitemtext">Discount</div>
              <div className="summaryitemprice">50%</div>
            </div>
            <div className="summaryitem">
              <div className="summaryitemtext" type="total">
                Amount to be paid
              </div>
              <div className="summaryitemprice">{`₹${amountToBePaid}`}</div>
            </div>
            <button className="summarybtn">CHECKOUT NOW</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
