import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Categories from "../components/categories";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Features from "../components/Features";
import Icons from "../components/Icons";
import Client from "../components/Client";

export default function home(props) {
  return (
    <div>
      <Announcement />
      <Navbar count={props.count} />
      <Slider />
      <Icons />
      <Categories />
      <Features />
      <Products setcount={props.setcount} />
      <Client />
      <Newsletter />
      <Footer />
    </div>
  );
}
