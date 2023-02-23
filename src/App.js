import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Post from './components/pages/Post/Post';
import AddPost from './components/pages/AddPost/AddPost';
import EditForm from './components/pages/EditForm/EditForm';
import About from './components/pages/About/About';
import PageNotFound from './components/pages/PageNoutFound/PageNotFound';
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';
import { Container } from 'react-bootstrap';

function App() {
  return (
  <Container>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:id" element={<Post />} />
      <Route path="/post/add" element={<AddPost />} />
      <Route path="/post/edit/:id" element={<EditForm />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    <Footer />
  </Container>
  );
}

export default App;


