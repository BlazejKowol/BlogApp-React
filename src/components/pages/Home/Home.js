import AllPosts from "../../features/AllPosts/AllPosts";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
    <section>
        <div className="d-flex justify-content-between my-4">
            <h1 className="h2">All posts</h1>
                <Link to={"/post/add"} className="text-decoration-none text-info">
                  <button className="btn border-info bg-transparent py-2 px-3 mx-1 text-info">Add Post </button>
                </Link>
        </div>
        </section>
      <AllPosts />
    </>
  );
};

  export default Home