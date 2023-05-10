import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import BlogPost from "./BlogPost";
import '../../css/blog.css'
import { fetchPosts } from "../../store/reducers/postSlice";
import { Link } from "react-router-dom";

const Blog = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const asyncFetchPosts = async () => {
            await dispatch(fetchPosts());
        }
         asyncFetchPosts();
    },[dispatch]);

    const posts = useSelector(state => state.post.posts); 

    console.log("postsData: ", posts)

    window.scrollTo(0,0);

    return (
        <div className="blog-wrapper">
            <div className='temp-wrapper'>
                    <Link to='/'>
                        <div className='temp-link'>Home</div>
                    </Link>
                    <Link to='/story'>
                        <div className='temp-link'>Story</div>
                    </Link>
                </div>
            <div className='filler'/>
            {posts.map((post) => (
                <BlogPost key={post.id} post={post}/>
            ))}
            <div className='temp-wrapper'>
                <Link to='/'>
                    <div className='temp-link'>Home</div>
                </Link>
                <Link to='/story'>
                    <div className='temp-link'>Story</div>
                </Link>
            </div>
        </div>
    )
}

export default Blog;