import "./Singleproduct.css";
import Navbar from "../components/Navbar/Navbar";
import Announcement from "../components/Announcement/Announcement";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";
import Jumpsuit from "../images/jumpsuit.jpeg";
import { Add, Remove } from "@mui/icons-material";

export default function singleproduct() {
  return (
    <div className="singleproduct_container">
      <Navbar />
      <Announcement />
      <div className="singleproduct_wrapper">
        <div className="single_imgcontainer">
          <img
            className="single_image"
            src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ff6%2F2a%2Ff62af804738a49e26740fc33e52316c2c960dcc5.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_jumpsuits_long%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
          />
        </div>
        <div className="single_infocontainer">
          <h1 className="single_tittle">Denim Jumpsuit</h1>
          <p className="single_desc">
            Ankle-length jumpsuit in lightweight, washed cotton denim with a
            collar, concealed buttons down the front and a yoke with a pleat at
            the back.
          </p>
          <div className="single_price">$ 20</div>
          <div className="single_filtercontainer">
            <div className="single_filter">
              <span className="single_filtertittle">Color</span>
              <div className="single_filtercolor1"></div>
              <div className="single_filtercolor2"></div>
              <div className="single_filtercolor3"></div>
            </div>
            <div className="single_filter">
              <h1 className="single_filtertittle">Size</h1>
              <select className="single_filtersize">
                <option className="single_filtersize_option">XS</option>
                <option className="single_filtersize_option">S</option>
                <option className="single_filtersize_option">M</option>
                <option className="single_filtersize_option">L</option>
                <option className="single_filtersize_option">XL</option>
                <option className="single_filtersize_option">XXL</option>
              </select>
            </div>
          </div>
          <div className="addcontainer">
            <div className="Amountcontainer">
              <Remove />
              <div className="amount">1</div>
              <Add />
            </div>
            <button className="add">ADD TO CART</button>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}
