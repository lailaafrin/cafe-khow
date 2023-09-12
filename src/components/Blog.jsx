import React from 'react';
import { FaRegBookmark } from "react-icons/fa";


const Blog = ({ bloge, handleBookMark, handleReadTime }) => {
    const { title, author, author_img, reading_time, posted_date, cover, hashtags } = bloge;
    return (
        <div className='mb-20'>
            <img className='w-full' src={cover} alt={`coverPicture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='w-16' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3> {author} </h3>
                        <p> {posted_date} </p>
                    </div>
                </div>
                
                <div>
                    <span> {reading_time} min read</span> 
                    <button onClick={()=>handleBookMark(bloge)} className='ml-2 mt-2 text-red-500'> <FaRegBookmark /></button>
                </div>
            </div>
            
            <h3>{title}</h3>
            
            <p>
                {
                    hashtags.map((hash, idx)=> <span key={idx}> <a href=""> #{hash} </a> </span>)

                }
            </p>
            <button
                onClick={ ()=> handleReadTime (reading_time)}
                className='text-purple-600 underline'>Mark as Read</button>
             
        </div>
    );
};

export default Blog;