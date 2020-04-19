import React from 'react';

const BlogCard = props => {
    return (
        <>
            <div className="col-lg-4 col-sm-12">
                <div className="card-deck">
                    <div className="card">
                        <img className="card-img-top" src={props.blogimg1} alt={props.id} />
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text">{props.bodybase}</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogCard;

