import { useSelector } from "react-redux";
import { getAllPosts } from "../../../redux/postsReducer";
import { Link } from "react-router-dom";

const AllPosts = () => {

    const posts = useSelector(getAllPosts);

  return (
    <section>
        <div className="allPostsNav">
            <h1>All posts</h1>
            <button>
                <Link to={"/post/add"}>Add Post</Link>
            </button>
        </div>
        {posts.map(post => (
            <div>   
                <h3>{post.title}</h3>
                <h4>{post.author}</h4>
                <h4>{post.date}</h4>
                <p>{post.description}</p>
                <button>
                    <Link key={post.id} to={"/post/" + post.id}>Read more</Link>
                </button>
            </div>
        ))}
    </section>
  );
};

  export default AllPosts;