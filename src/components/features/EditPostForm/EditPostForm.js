import { useDispatch } from "react-redux";
import { editPost } from "../../../redux/postsReducer";
import { useNavigate } from "react-router-dom";
import PostForm from "../PostForm/PostForm";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getPostsById } from "../../../redux/postsReducer";

const EditPostForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const postData = useSelector(state => getPostsById(state, id));

    const handleSubmit = post => {
        dispatch(editPost({...post, id}));
        navigate("/");
    }
        
    if(!postData) return <Navigate to="/" />

    return (
        <PostForm onSubmit={handleSubmit} actionText="Edit post" /> 
    );
  };
  
    export default EditPostForm;