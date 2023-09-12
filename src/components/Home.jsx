import React, { useEffect, useState } from 'react';
import Blog from './blog';

const Home = ({ handleBookMark, handleReadTime }) => {
    const [ blogs, setBlogs ] = useState([]);

    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data)); 
    }, []);
    return (
        <div className='md:w-2/3'>
            <h1>Blog: {blogs.length} </h1> 
            {
                blogs.map(bloge => <Blog
                    key={bloge.id}
                    bloge={bloge}
                    handleBookMark={handleBookMark}
                    handleReadTime={handleReadTime}
                ></Blog>)
            }

        </div>
    );
};

export default Home;