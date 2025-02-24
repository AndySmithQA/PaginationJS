import { useState, useEffect } from 'react';
import Posts from './Posts';
import Pagination from './Pagination';
import './App.css'

function App() {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);


  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
      setPosts(data);
      setLoading(false);
    }

    fetchPosts();
  }, []);

  // Pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

 return (
  <>
 <div className="heading">Blogs</div>
  <div className="container">
      <Posts posts={currentPosts} loading={loading} /> 
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
  </div>
  </>
 )

}

export default App
