import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dateToString from '../../../utils/dateToString';
import { useForm } from "react-hook-form";
import { useSelector } from 'react-redux';
import { getAllCategories } from '../../../redux/categoriesReducer';

const PostForm = ({ action, actionText, ...props }) => {

        const [title, setTitle] = useState(props.title || '');
        const [author, setAuthor] = useState(props.author || '');
        const [date, setDate] = useState(props.date || '');
        const [categoryState, setCategoryState] = useState(props.category || '');
        const [description, setDescription] = useState(props.description || '');
        const [content, setContent] = useState(props.content || '');
        
        const [contentError, setContentError] = useState(false);
        const [dateError, setDateError] = useState(false);
        const [categoryError, setCategoryError] = useState(false);

        const categories = useSelector(getAllCategories);

        const { register, handleSubmit: validate, formState: { errors } } = useForm();

        const handleSubmit = () => {
            setContentError(!content);
            setDateError(!date);
            setCategoryError(!categoryState);
            if(content && categoryState && date) {
            action({title, author, date, category: categoryState, description, content});
            }
        };

    return (
        <Form onSubmit={validate(handleSubmit)}> 
            <Form.Label>Title</Form.Label>
                <Form.Control 
                {...register("title", { required: true, minLength: 3 })} 
                className="mb-3 w-50" 
                value={title} 
                placeholder="Enter Title" 
                type="text" 
                onChange={e => setTitle(e.target.value)} />
                {errors.title && <small className="d-block form-text text-danger mt-2">This field is required</small>}
            <Form.Label>Author</Form.Label>
                <Form.Control 
                {...register("author", { required: true, minLength: 3 })} 
                className="mb-3 w-50" 
                value={author} 
                placeholder="Enter Author" 
                type="text" 
                onChange={e => setAuthor(e.target.value)} />
                {errors.author && <small className="d-block form-text text-danger mt-2">This field is required</small>}
            <Form.Label>Date</Form.Label>
                <DatePicker 
                className="mb-3 w-50" 
                value={date} 
                onChange={(date) => setDate(dateToString(date))} />
                {dateError && <small className="d-block form-text text-danger mt-2">Date can't be empty</small>}
            <Form.Label>Category</Form.Label>
                <Form.Select className="mb-3 w-50"
                value={categoryState}
                onChange={e => setCategoryState(e.target.value)}>
                <option>Select category...</option>
                {categories.map(category => 
                <option>
                    {category.title}
                </option>)}
                </Form.Select>
                {categoryError && <small className="d-block form-text text-danger mt-2">Selection is required</small>}
            <Form.Label>Short description</Form.Label>
                <Form.Control
                {...register("description", { required: true, minLength: 20 })}
                as="textarea" 
                rows={4} 
                className="mb-3" 
                value={description} 
                placeholder="Leave a comment here..." 
                type="text" 
                onChange={e => setDescription(e.target.value)} />
                {errors.description && <small className="d-block form-text text-danger mt-2">This field is required</small>}
            <Form.Label>Main content</Form.Label>
                <ReactQuill 
                theme='snow' 
                value={content} 
                placeholder="Leave a comment here..." 
                type="text" 
                onChange={setContent} />
                {contentError && <small className="d-block form-text text-danger mt-2">Content can't be empty</small>}
            <Button type="submit" className="border border-none bg-primary rounded py-1 mt-1">
                <p className="text-light m-0">{actionText}</p>
            </Button>
      </Form>
    );
  };
  
    export default PostForm;