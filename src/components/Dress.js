// import "./Shirtproducts.css";
import {
  KURTIS,
  LONGFROCK,
  LOUNGEWEAR,
  SHIRTPRODUCTS,
  LIGHTJACKET,
} from "../components/data";
import "./Dress";
import { useLocation } from "react-router-dom";
import DressItem from "./DressItem";

function Dress(props) {
  const location = useLocation();
  const sliced = location.pathname.slice(1, location.pathname.length);
  var arrss;
  console.log(sliced);
  if (sliced === "KURTIS") {
    arrss = KURTIS;
    var name = "KURTIS";
  }
  if (sliced === "LONGFROCK") {
    arrss = LONGFROCK;
    var name = "LONGFROCK";
  }
  if (sliced === "LOUNGEWEARLOVE") {
    arrss = LOUNGEWEAR;
    var name = "LOUNGEWEARLOVE";
  }
  if (sliced === "SHIRTPRODUCTS") {
    arrss = SHIRTPRODUCTS;
    var name = "SHIRTPRODUCTS";
  }
  if (sliced === "LIGHTJACKETS") {
    arrss = LIGHTJACKET;
    var name = "LIGHTJACKETS";
  }
  return (
    <div className="shirtproducts_container">
      {arrss.map((item) => {
        return (
          <DressItem
            title={item.title}
            price={item.price}
            desc={item.desc.toLowerCase()}
            img={item.img}
            name={name}
            setcount={props.setcount}
          />
        );
      })}
    </div>
  );
}
export default Dress;
