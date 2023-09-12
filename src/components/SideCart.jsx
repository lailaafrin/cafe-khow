import React from 'react';
import SingleBookmark from './SingleBookmark';

const SideCart = ({ bookmarks, readingtime }) => {
    
    return (
        <div className='md:w-1/3 bg-gray-300 mt-2  ml-4'>

            <div>
                <h3 className='text-4xl text-center'>ReadingTime: {readingtime}</h3>
            </div>
            <h1 className='text-4xl text-center'>bookmarks: {bookmarks.length}</h1>

            {
                bookmarks.map(bookmark => <SingleBookmark
                    
                    key={bookmark.id}
                bookmark={bookmark}
                ></SingleBookmark>)
            }
        </div>
    );
};

export default SideCart;