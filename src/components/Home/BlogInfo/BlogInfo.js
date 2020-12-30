import React from 'react';

const BlogInfo = ({blog}) => {
    return (
        <div className="col-md-4 text-center">
            <div class="">
  <div class="card">
    
    <div class="card-body">
    <div className="d-flex justify-content-center">
                            <div>
                            <img style={{width:'100px'}} src={blog.image} alt=""/>
                            </div>
                            <div className="ml-3 mt-2">
                                <h4>{blog.name}</h4>
                                <h5 className="text-secondary">{blog.reviewDate}</h5>
                            </div>
                            
                        </div>
                        <p className="font-weight-bold">{blog.quote}</p>
                        <p className="text-secondary">{blog.summary}</p>
    </div>
  </div>
</div>
        </div>
    );
};

export default BlogInfo;