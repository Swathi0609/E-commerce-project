import "./categories.css";
import { categories } from "../components/data";
import CategoryItem from "./CategoryItem";

function Categories() {
  return (
    <div className="categories_container">
      {categories.map((item) => (
        <CategoryItem item={item} />
      ))}
    </div>
  );
}

export default Categories;
