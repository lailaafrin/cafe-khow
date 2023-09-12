import React from 'react';

const SingleBookmark = ({ bookmark }) => {

    const {title} = bookmark;
    return (
        <div className='bg-slate-200 p-4 m-4 rounded-lg'>
            <h3 className='text-3xl'>{title}</h3> 

            
        </div>
    );
};

export default SingleBookmark;