import React, { Component } from "react";

import IMG01 from '../../assets/images/blog-01.jpg';
import IMG02 from '../../assets/images/blog-02.jpg';
import IMG03 from '../../assets/images/blog-03.jpg';
import IMG04 from '../../assets/images/blog-04.jpg';

import { Link } from 'react-router-dom';

class Blog extends Component {
    render(){
        return(
        <div className="page-wrapper">
            <div className="content">
                <div className="row">
                    <div className="col-sm-8 col-4">
                        <h4 className="page-title">Blog</h4>
                    </div>
                    <div className="col-sm-4 col-8 text-right m-b-30">
                        <Link className="btn btn-primary btn-rounded float-right" to="/add-blog"><i className="fa fa-plus"></i> Add Blog</Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-4">
                        <div className="blog grid-blog">
                            <div className="blog-image">
                                <Link to="/blog"><img className="img-fluid" src={IMG01} alt="" /></Link>
                            </div>
                            <div className="blog-content">
                                <h3 className="blog-title"><Link to="/blog">Do You Know the ABCs of Health Care?</Link></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor incididunt ut labore etmis dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris.</p>
                                <Link to="/blog" className="read-more"><i className="fa fa-long-arrow-right"></i> Read More</Link>
                                <div className="blog-info clearfix">
                                    <div className="post-left">
                                        <ul>
                                            <li><Link to="#0"><i className="fa fa-calendar"></i> <span>December 6, 2017</span></Link></li>
                                        </ul>
                                    </div>
                                    <div className="post-right"><a href="#0"><i className="fa fa-heart-o"></i>21</a> <a href="#0"><i className="fa fa-eye"></i>8</a> <a href="#0"><i className="fa fa-comment-o"></i>17</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-4">
                        <div className="blog grid-blog">
                            <div className="blog-image">
                                <Link to="/blog"><img className="img-fluid" src={IMG02} alt="" /></Link>
                            </div>
                            <div className="blog-content">
                                <h3 className="blog-title"><Link to="/blog">Do You Know the ABCs of Health Care?</Link></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor incididunt ut labore etmis dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris.</p>
                                <Link to="/blog" className="read-more"><i className="fa fa-long-arrow-right"></i> Read More</Link>
                                <div className="blog-info clearfix">
                                    <div className="post-left">
                                        <ul>
                                            <li><a href="#0"><i className="fa fa-calendar"></i> <span>December 6, 2017</span></a></li>
                                        </ul>
                                    </div>
                                    <div className="post-right"><a href="#0"><i className="fa fa-heart-o"></i>21</a> <a href="#0"><i className="fa fa-eye"></i>8</a> <a href="#0"><i className="fa fa-comment-o"></i>17</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-4">
                        <div className="blog grid-blog">
                            <div className="blog-image">
                                <Link to="/blog"><img className="img-fluid" src={IMG03} alt="" /></Link>
                            </div>
                            <div className="blog-content">
                                <h3 className="blog-title"><Link to="/blog">Do You Know the ABCs of Health Care?</Link></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor incididunt ut labore etmis dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris.</p>
                                <Link to="/blog" className="read-more"><i className="fa fa-long-arrow-right"></i> Read More</Link>
                                <div className="blog-info clearfix">
                                    <div className="post-left">
                                        <ul>
                                            <li><a href="#0"><i className="fa fa-calendar"></i> <span>December 6, 2017</span></a></li>
                                        </ul>
                                    </div>
                                    <div className="post-right"><a href="#0"><i className="fa fa-heart-o"></i>21</a> <a href="#0"><i className="fa fa-eye"></i>8</a> <a href="#0"><i className="fa fa-comment-o"></i>17</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-4">
                        <div className="blog grid-blog">
                            <div className="blog-image">
                                <Link to="/blog"><img className="img-fluid" src={IMG04} alt="" /></Link>
                            </div>
                            <div className="blog-content">
                                <h3 className="blog-title"><Link to="/blog">Do You Know the ABCs of Health Care?</Link></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor incididunt ut labore etmis dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris.</p>
                                <Link to="/blog" className="read-more"><i className="fa fa-long-arrow-right"></i> Read More</Link>
                                <div className="blog-info clearfix">
                                    <div className="post-left">
                                        <ul>
                                            <li><Link to="#0"><i className="fa fa-calendar"></i> <span>December 6, 2017</span></Link></li>
                                        </ul>
                                    </div>
                                    <div className="post-right"><Link to="#0"><i className="fa fa-heart-o"></i>21</Link> <a href="#0"><i className="fa fa-eye"></i>8</a> <a href="#0"><i className="fa fa-comment-o"></i>17</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
};

export default Blog