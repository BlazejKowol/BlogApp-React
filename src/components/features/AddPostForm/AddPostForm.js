import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../../redux/postsReducer";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AddPostForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [title, setTitle] = useState();
    const [author, setAuthor] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addPost({title, author, date, description, content}));
        setTitle('');
        setAuthor('');
        setDate('');
        setDescription('');
        setContent('');
        navigate("/");
    }

    return (
        <Form onSubmit={handleSubmit}> 
            <Form.Label>Title</Form.Label>
                <Form.Control className="mb-3 w-50" value={title} placeholder="Enter Title" type="text" onChange={e => setTitle(e.target.value)} />
            <Form.Label>Author</Form.Label>
                <Form.Control className="mb-3 w-50" value={author} placeholder="Enter Author" type="text" onChange={e => setAuthor(e.target.value)} />
            <Form.Label>Date</Form.Label>
                <Form.Control className="mb-3 w-50" value={date} placeholder="Enter Date" type="text" onChange={e => setDate(e.target.value)} />
            <Form.Label>Short description</Form.Label>
                <Form.Control as="textarea" rows={4} className="mb-3" value={description} placeholder="Leave a comment here..." type="text" onChange={e => setDescription(e.target.value)} />
            <Form.Label>Main content</Form.Label>
                <Form.Control as="textarea" rows={8} className="mb-3" value={content} placeholder="Leave a comment here..." type="text" onChange={e => setContent(e.target.value)} />
            <Button className="border border-none bg-primary rounded py-1">
                <p className="text-light m-0">Add card</p>
            </Button>
      </Form>
    );
  };
  
    export default AddPostForm;