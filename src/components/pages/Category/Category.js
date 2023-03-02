import { useSelector } from "react-redux";
import { getCategoriesByTitle } from "../../../redux/categoriesReducer";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";

const Category = () => {

    const { title } = useParams();
    const categories = useSelector(state => getCategoriesByTitle(state, title));
    console.log(categories);

    if(!categories) return <Navigate to="/" />

    return (
      <div>
        <h1>Category xyz</h1>
        <p>Lorem Ipsum</p>
      </div>
    );
  };
  
    export default Category;