import AllPosts from "../../features/AllPosts/AllPosts";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
    <section>
        <div className="d-flex justify-content-between my-4">
            <h1 className="h2">All posts</h1>
            <button className="btn btn-light border-info bg-transparent py-0">
                <Link to={"/post/add"} className="text-decoration-none text-info">Add Post</Link>
            </button>
        </div>
        </section>
      <AllPosts />
    </>
  );
};

  export default Home;