import { useDispatch } from "react-redux";
import { editPost } from "../../../redux/postsReducer";
import { useNavigate } from "react-router-dom";
import PostForm from "../PostForm/PostForm";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getPostsById } from "../../../redux/postsReducer";
import dateToString from "../../../utils/dateToString";

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
        <PostForm 
        action={handleSubmit} 
        actionText="Edit post"
        title={postData.title}
        author={postData.author}
        date={dateToString(postData.date)}
        category={postData.category}
        description={postData.description}
        content={postData.content} /> 
    );
  };
  
    export default EditPostForm;