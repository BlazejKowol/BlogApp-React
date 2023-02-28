import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { getPostsById, removePost } from "../../../redux/postsReducer";
import { Link } from "react-router-dom";
import Modals from "../../common/Modals/Modals";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router";

const Post = () => {

  const dispatch = useDispatch();
  const { id } = useParams();
  const postData = useSelector(state => getPostsById(state, id));

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const postRemove = e => {
    e.preventDefault();
    dispatch(removePost(id))
  }

  if(show) {
    if(!postData) return <Navigate to="/" />
    return (
      <Modals show={show} handleClose={handleClose} postRemove={postRemove} />
    )
  }

  return (
    <div className="m-5 px-5">
      <section className="d-flex justify-content-between mb-3">
        <h3>{postData.title}</h3>
        <div>
          <button className="btn border-info bg-transparent py-0 mx-1">
            <Link className="text-decoration-none" key={id} to={"/post/edit/" + id}><p className="m-2 text-info">Edit</p></Link>
          </button>
          <button onClick={handleShow} className="btn border-danger bg-transparent py-0 mx-1">
            <p className="m-2 text-danger">Delete</p>
          </button>
        </div>
      </section>
        <h4 className="small"><b>Author: </b>{postData.author}</h4>
        <h4 className="small mb-4"><b>Published: </b>{postData.date}</h4>
        <p dangerouslySetInnerHTML={{ __html: postData.content }} />
    </div>
  );
};

  export default Post;