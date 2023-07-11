import "./categoryitem.css";
import { Link } from "react-router-dom";

function CategoryItem(props) {
  return (
    <div className="categoryitem_container">
      <img className="category_image" src={props.item.img} />
      <div className="category_info_container">
        <h1 className="category_title">{props.item.title}</h1>
        <Link to={`/${props.item.title}`} style={{ textDecoration: "none" }}>
          <button className="category_btn">SHOP NOW</button>
        </Link>
      </div>
    </div>
  );
}

export default CategoryItem;
