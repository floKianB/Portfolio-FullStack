import React, {useEffect, useState} from 'react';
import styles from '../styles/blogs/blogs.module.css';

import Banner from '../banner';
import bannerPic from '../../images/banner2.png';


import EachBlog from './eachBlog';

function Blogs() {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:8080/blogs")
            .then(res => res.json())
            .then(allblogs => setBlogs([...allblogs]))
    }, []);


    return (
        <>
            <div class={styles.content}
                intial = {{opacity: 0}} animate = {{opacity: 1}} exit = {{opacity: 1}}
            >
                <Banner banner={bannerPic}/>
                <div className={styles.blogs}>
                    {
                        blogs.map((eachBlog, index) => {
                            return <EachBlog eachBlog={eachBlog} key={index} />;
                        })
                    }
                </div>
                
            </div>
            
        </>
    )
}

export default Blogs;