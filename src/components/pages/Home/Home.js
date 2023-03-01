import AllPosts from "../../features/AllPosts/AllPosts";
import { Link } from "react-router-dom";
import Button from "../../common/Button";

const Home = () => {
  return (
    <>
    <section>
        <div className="d-flex justify-content-between my-4">
            <h1 className="h2">All posts</h1>
 
                <Link to={"/post/add"} className="text-decoration-none text-info"><Button>Add Post </Button></Link>

        </div>
        </section>
      <AllPosts />
    </>
  );
};

  export default Home;