import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/home/home';
import Post from './components/pages/Post/Post';
import AddForm from './components/pages/AddForm/AddForm';
import EditForm from './components/pages/EditForm/EditForm';
import About from '/components/pages/About/About';
import PageNotFound from './components/pages/PageNoutFound/PageNotFound';

function App() {
  return (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/post/:id" element={<Post />} />
    <Route path="/post/add" element={<AddForm />} />
    <Route path="/post/edit/:id" element={<EditForm />} />
    <Route path="/about" element={<About />} />
    <Route path="*" element={<PageNotFound />} />
  </Routes>
  );
}

export default App;


