import { useSelector } from "react-redux";
import { getAllPosts } from "../../../redux/postsReducer";
import { Link } from "react-router-dom";

const AllPosts = () => {

    const posts = useSelector(getAllPosts);

  return (
        <section className="d-flex justify-content-between">
        {posts.map(post => (
            <div className="col-3 border border-1 py-2 ps-2 pe-5">   
                <h3 className="h4">{post.title}</h3>
                <h4 className="small"><b>Author: </b>{post.author}</h4>
                <h4 className="small"><b>Published: </b>{post.date}</h4>
                <p>{post.description}</p>
                <button className="border border-none bg-primary rounded py-1">
                    <Link className="text-decoration-none text-light px-1" key={post.id} to={"/post/" + post.id}>Read more</Link>
                </button>
            </div>
        ))}
        </section>
  );
};

  export default AllPosts;