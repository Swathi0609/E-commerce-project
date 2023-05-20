import "./categoryitem.css";

function CategoryItem(props) {
  return (
    <div className="categoryitem_container">
      <img className="category_image" src={props.item.img} />
      <div className="category_info_container">
        <h1 className="category_title">{props.item.title}</h1>
        <button className="category_btn">SHOP NOW</button>
      </div>
    </div>
  );
}

export default CategoryItem;
