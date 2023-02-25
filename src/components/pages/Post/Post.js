import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { getPostsById } from "../../../redux/postsReducer";
import { Link } from "react-router-dom";

const Post = () => {

  const { id } = useParams();
  const postData = useSelector(state => getPostsById(state, id));

  return (
    <div className="m-5 px-5">
      <section className="d-flex justify-content-between mb-3">
        <h3>{postData.title}</h3>
        <div>
          <button className="btn border-info bg-transparent py-0 mx-1">
            <Link className="text-decoration-none text-info px-1" key={id} to={"/post/edit/" + id}>Edit</Link>
          </button>
          <button className="btn border-danger bg-transparent py-0 mx-1">
            Delete
          </button>
        </div>
      </section>
        <h4 className="small"><b>Author: </b>{postData.author}</h4>
        <h4 className="small mb-4"><b>Published: </b>{postData.date}</h4>
      <p>{postData.content}</p>
    </div>
  );
};

  export default Post;