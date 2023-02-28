import { useSelector } from "react-redux";
import { getAllPosts } from "../../../redux/postsReducer";
import { Link } from "react-router-dom";
import { Col, Button } from "react-bootstrap";

const AllPosts = () => {

    const posts = useSelector(getAllPosts);

  return (
        <section className="d-flex justify-content-between flex-wrap">
        {posts.map(post => (
            <Col key={post.id} xs="12" md="6" className="col-lg-4">
                <div className={"border border-2 rounded py-2 ps-2 mx-1 mb-2"}>  
                    <h3 className="h4">{post.title}</h3>
                    <h4 className="small"><b>Author: </b>{post.author}</h4>
                    <h4 className="small"><b>Published: </b>{post.date}</h4>
                    <p>{post.description}</p>      
                    <Button type="submit" className="border border-none bg-primary rounded py-1">
                        <Link className="text-decoration-none text-light px-1" key={post.id} to={"/post/" + post.id}>Read more</Link>
                    </Button>
                </div>
            </Col>
        ))}
        </section>
  );
};

  export default AllPosts;