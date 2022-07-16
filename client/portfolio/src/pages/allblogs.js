import React from 'react';

import Constants from '../components/leftInfo';
import RightNav from '../components/rightNav';
import Blogs from '../components/blogs/blogs';

function AllBlogs() {

    return (
        <>
            <Constants />
            <Blogs />
            <RightNav />
        </>
    )
}

export default AllBlogs;