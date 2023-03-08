import { useSelector } from "react-redux";
import { getFilteredPosts } from "../../../redux/categoriesReducer";
import { Link } from "react-router-dom";
import { Button, Col } from "react-bootstrap";
import dateToString from "../../../utils/dateToString";
import { useParams } from "react-router-dom";

const Category = () => {

    const { title } = useParams();
    const parsedTitle = title[0].toUpperCase() + title.substring(1).toLowerCase();
    const categoriesFiltered = useSelector(state => getFilteredPosts(state, parsedTitle));

    if(categoriesFiltered.length === 0) return (
    <>
    <h1>Category: {parsedTitle}</h1>
    <p>No posts in this category</p>
    </>) 

    return (
      <div>
        <h1>Category: {parsedTitle}</h1>
        <section className="row">
        {categoriesFiltered.map(post => (
            <Col key={post.id} xs="12" md="6" className="col-lg-4">
                <div className={"border border-2 rounded py-2 ps-2 mx-1 mb-2"}>  
                    <h3 className="h4">{post.title}</h3>
                    <h4 className="small"><b>Author: </b>{post.author}</h4>
                    <h4 className="small"><b>Published: </b>{dateToString(post.date)}</h4>
                    <h4 className="small"><b>Category: </b>{post.category}</h4>
                    <p>{post.description}</p>      
                    <Link className="text-decoration-none text-light px-1" key={post.id} to={"/post/" + post.id}>
                        <Button type="submit" className="border border-none bg-primary rounded py-1">Read more</Button>
                    </Link>
                </div>
            </Col>
        ))}
        </section>
      </div>
    );
  };
  
    export default Category;