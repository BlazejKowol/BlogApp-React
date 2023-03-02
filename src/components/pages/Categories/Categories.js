import { getAllCategories } from "../../../redux/categoriesReducer";
import { useSelector } from "react-redux";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Categories = () => {
    
  const categories = useSelector(getAllCategories);
  
  return (
      <div className="m-5 px-5">
        <h1>All Categories</h1>
        {categories.map(category => 
        <Col className="border border-1 rounded py-2 ps-2 mx-1">
          <Link key={category.id} to={"/category/" + category.title}><header>{category.title}</header></Link>
        </Col>  
          )}
      </div>
    );
  };
  
    export default Categories;