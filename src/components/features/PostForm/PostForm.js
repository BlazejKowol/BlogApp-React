import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

const PostForm = ({ action, actionText, ...props }) => {

        const [title, setTitle] = useState(props.title || '');
        const [author, setAuthor] = useState(props.author || '');
        const [date, setDate] = useState(props.date || '');
        const [description, setDescription] = useState(props.description || '');
        const [content, setContent] = useState(props.content || '');

        const handleSubmit = e => {
            e.preventDefault();
            action({title, author, date, description, content});
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
            <Button type="submit" className="border border-none bg-primary rounded py-1">
                <p className="text-light m-0">{actionText}</p>
            </Button>
      </Form>
    );
  };
  
    export default PostForm;