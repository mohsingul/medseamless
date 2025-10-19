import React, { Component } from "react";
import Select from 'react-select';
import IMG01 from '../../../assets/images/blog-thumb-01.jpg';
import IMG02 from '../../../assets/images/placeholder-thumb.jpg';


class BlogEdit extends Component {
    render(){
        const blog = [
            { value: 'Health care', label: 'Health care' },
            { value: 'Child', label: 'Child' },
            { value: 'Health care', label: 'Health care' }
          ];

          const blogsub = [
            { value: 'Health care', label: 'Health care' },
            { value: 'Health care', label: 'Health care' },
            { value: 'Health care', label: 'Health care' }
          ];

        return(
            <div className="page-wrapper">
            <div className="content">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <h4 className="page-title">Edit Blog</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <form>
                            <div className="form-group">
                                <label>Blog Name</label>
                                <input className="form-control" type="text" value="Apple Macbook Air MQD42HN/A 13-inch Laptop" />
                            </div>
                            <div className="form-group">
                                <label>Blog Images</label>
                                <div>
                                    <input className="form-control" type="file" />
                                    <small className="form-text text-muted">Max. file size: 50 MB. Allowed images: jpg, gif, png. Maximum 10 images only.</small>
                                </div>
                                <div className="row">
                                    <div className="col-md-3 col-sm-3 col-4 col-lg-3 col-xl-2">
                                        <div className="product-thumbnail">
											<img src={IMG01} className="img-thumbnail img-fluid" alt="" />
                                            <span className="product-remove" title="remove"><i className="fa fa-close"></i></span>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-3 col-4 col-lg-3 col-xl-2">
                                        <div className="product-thumbnail">
                                                <img src={IMG02} className="img-thumbnail img-fluid" alt="" />
                                            <span className="product-remove" title="remove"><i className="fa fa-close"></i></span>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-3 col-4 col-lg-3 col-xl-2">
                                        <div className="product-thumbnail">
											<img src={IMG02} className="img-thumbnail img-fluid" alt="" />
                                            <span className="product-remove" title="remove"><i className="fa fa-close"></i></span>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-3 col-4 col-lg-3 col-xl-2">
                                        <div className="product-thumbnail">
											<img src={IMG02} className="img-thumbnail img-fluid" alt="" />
                                            <span className="product-remove" title="remove"><i className="fa fa-close"></i></span>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-3 col-4 col-lg-3 col-xl-2">
                                        <div className="product-thumbnail">
											<img src={IMG02} className="img-thumbnail img-fluid" alt="" />
                                            <span className="product-remove" title="remove"><i className="fa fa-close"></i></span>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-3 col-4 col-lg-3 col-xl-2">
                                        <div className="product-thumbnail">
											<img src={IMG02} className="img-thumbnail img-fluid" alt="" />
                                            <span className="product-remove" title="remove"><i className="fa fa-close"></i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Blog Category</label>
                                        <Select options={blog} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Blog Sub Category</label>
                                        <Select options={blogsub} />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Blog Description</label>
                                <textarea cols="30" rows="6" className="form-control"></textarea>
                            </div>
                            <div className="form-group">
                                <label>Tags <small>(separated with a comma)</small></label>
                                <input type="text" placeholder="Enter your tags" data-role="tagsinput" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label className="display-block">Blog Status</label>
								<div className="form-check form-check-inline">
									<input className="form-check-input" type="radio" name="status" id="blog_active" value="option1" checked />
									<label className="form-check-label" htmlFor="blog_active">
									Active
									</label>
								</div>
								<div className="form-check form-check-inline">
									<input className="form-check-input" type="radio" name="status" id="blog_inactive" value="option2" />
									<label className="form-check-label" htmlFor="blog_inactive">
									Inactive
									</label>
								</div>
                            </div>
                            <div className="m-t-20 text-center">
                                <button className="btn btn-primary submit-btn">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
          </div>  
        );
    }
}

export default BlogEdit;