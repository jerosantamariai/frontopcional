import React from 'react';
import BlogCard from './blogcard';

const BlogsCards = props => {
    return (
        <>
            <div className="row my-3 mx-3">
                
                    {
                        !!props.bloginfo &&
                        props.bloginfo.map((elem, i) => {
                            return (
                                <BlogCard
                                    id={elem.id}
                                    blogimg1={elem.blogimg1}
                                    title={elem.title}
                                    bodybase={elem.bodybase}
                                />
                            )
                        })

                    }

            </div>
        </>
    )
}

export default BlogsCards;