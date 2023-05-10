import React from "react";
import '../../css/post.css'

const BlogPost = ({post}) => {
    return (
        <div className='post-wrapper'>
            <div className='post-title-wrapper'>
                <div className='post-title'>{`${post.title}`}</div>
            </div>
                        {(post.images.length > 1) ? (
                            <div className='post-image-wrapper'>
                                {post.images.map((image) => (
                                    <div className='inner-wrapper'>
                                        <img src={image} alt='blogImage' className='post-image'/>
                                    </div>
                                ))}
                                <div className="icon" aria-hidden="true"></div>
                            </div>
                        ) : (
                            <div className='single-image-wrapper'>
                                <img src={post.images[0]} alt='blogImage' className='post-image'/>
                            </div>
                        )}
            <div className='post-content-wrapper'>
                <div className='post-content'>
                    {`${post.content}`}
                </div>
            </div>
        </div>
    )
}

export default BlogPost