import React from 'react';
import styles from '../styles/blogs/blog.module.css';

import defaultBlogPic from '../../images/default-blog.png';

function EachBlog(props) {
    return (
        <div className={styles.eachBlogContainer}>
            <img className={styles.pic} src={defaultBlogPic} alt={defaultBlogPic}/>
            <h3 className={styles.name}>{props.eachBlog.Name}</h3>
            <p className={styles.description}>{props.eachBlog.Description}</p>
        </div>
    )
}

export default EachBlog;