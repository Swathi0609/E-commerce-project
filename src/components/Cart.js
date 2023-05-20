import "./cart.css";
import Announcement from "./components/Announcement";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Add, Remove } from "@mui/icons-material";

export default function cart() {
  return (
    <div className="cart_container">
      <Navbar />
      <Announcement />
      <div className="cart_wrapper">
        <h1 className="cart_tittle">YOUR BAG</h1>
        <div className="cart_top">
          <button className="cart_topbtn">CONTINUE SHOPPING</button>
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
            info
            <div className="cart_product">
              <div className="productdetail">
                <img
                  className="cart_image"
                  src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"
                />
                <div className="details">
                  <div className="productname">
                    <b>Product:</b> JESSIE THUNDER SHOES
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
                    <Add></Add>
                    <div className="productamount">2</div>
                    <Remove />
                  </div>
                  <div className="productprice">$ 30</div>
                </div>
              </div>
            </div>
            <hr className="hr"></hr>
            <div className="cart_product">
              <div className="productdetail">
                <img
                  className="cart_image"
                  src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png"
                />
                <div className="details">
                  <div className="productname">
                    <b>Product:</b> HAKURA T-SHIRT
                  </div>
                  <div className="product_id">
                    <b>ID:</b>567
                  </div>

                  <div className="product_color" color="gray"></div>
                  <div className="productsize">
                    <b>size:</b>M
                  </div>
                </div>
                <div className="pricedetail">
                  <div className="productamountcontainer">
                    <Add></Add>
                    <div className="productamount">2</div>
                    <Remove />
                  </div>
                  <div className="productprice">$ 30</div>
                </div>
              </div>
            </div>
          </div>
          <div className="cart_summary">
            SUMMARY
            <h1 className="summarytittle">ORDER SUMMARY</h1>
            <div className="summaryitem">
              <span className="summaryitemtext">subtotal</span>
              <span className="summaryitemprice">$ 40</span>
            </div>
            <div className="summaryitem">
              <div className="summaryitemtext">estimated shipping</div>
              <div className="summaryitemprice">$ 5.40</div>
            </div>
            <div className="summaryitem">
              <div className="summaryitemtext">shipping discount</div>
              <div className="summaryitemprice">$ -5.90</div>
            </div>
            <div className="summaryitem">
              <div className="summaryitemtext" type="total">
                shipping discount
              </div>
              <div className="summaryitemprice">$ 80</div>
            </div>
            <button className="summarybtn">CHECKOUT NOW</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
