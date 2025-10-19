import React, { Component } from "react";
import { Link } from 'react-router-dom';
import user from '../../../assets/images/user.jpg';
import IMG01 from '../../../assets/images/blog-01.jpg';
import IMG02 from '../../../assets/images/blog-02.jpg';
import IMG03 from '../../../assets/images/blog-03.jpg';
import IMG04 from '../../../assets/images/blog-04.jpg';

class BlogDetails extends Component {
    render(){
        return(
            <div className="page-wrapper">
            <div className="content">
                <div className="row">
                    <div className="col-sm-12">
                        <h4 className="page-title">Blog View</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <div className="blog-view">
                            <article className="blog blog-single-post">
                                <h3 className="blog-title">Do you know the ABCs of Health Care?</h3>
                                <div className="blog-info clearfix">
                                    <div className="post-left">
                                        <ul>
                                            <li><a href="#0"><i className="fa fa-calendar"></i> <span>December 6, 2017</span></a></li>
                                            <li><a href="#0"><i className="fa fa-user-o"></i> <span>By Andrew Dawis</span></a></li>
                                        </ul>
                                    </div>
                                    <div className="post-right"><a href="#0"><i className="fa fa-comment-o"></i>1 Comment</a></div>
                                </div>
                                <div className="blog-image">
                                    <a href="#0"><img alt="" src={IMG01} className="img-fluid" /></a>
                                </div>
                                <div className="blog-content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                                    <blockquote>
                                        <p>Vestibulum id ligula porta felis euismod semper. Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper.</p>
                                    </blockquote>
                                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                                </div>
                            </article>
                            <div className="widget blog-share clearfix">
                                <h3>Share the post</h3>
                                <ul className="social-share">
                                    <li><a href="#0" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#0" title="Twitter"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#0" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
                                    <li><a href="#0" title="Google Plus"><i className="fa fa-google-plus"></i></a></li>
                                    <li><a href="#0" title="Youtube"><i className="fa fa-youtube"></i></a></li>
                                </ul>
                            </div>
                            <div className="widget author-widget clearfix">
                                <h3>About author</h3>
                                <div className="about-author">
                                    <div className="about-author-img">
                                        <div className="author-img-wrap">
                                            <img className="img-fluid rounded-circle" alt="" src={user} />
                                        </div>
                                    </div>
                                    <div className="author-details">
                                        <span className="blog-author-name">Linda Barrett</span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="widget blog-comments clearfix">
                                <h3>Comments (3)</h3>
                                <ul className="comments-list">
                                    <li>
                                        <div className="comment">
                                            <div className="comment-author">
                                                <img className="avatar" alt="" src={user} />
                                            </div>
                                            <div className="comment-block">
                                                <span className="comment-by">
													<span className="blog-author-name">Diana Bailey</span>
                                                <span className="float-right">
														<span className="blog-reply"><a href="#0"><i className="fa fa-reply"></i> Reply</a></span>
                                                </span>
                                                </span>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae, gravida pellentesque urna varius vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim ornare nisi, vitae mattis nulla ante id dui.</p>
                                                <span className="blog-date">December 6, 2017</span>
                                            </div>
                                        </div>
                                        <ul className="comments-list reply">
                                            <li>
                                                <div className="comment">
                                                    <div className="comment-author">
                                                        <img className="avatar" alt="" src={user} />
                                                    </div>
                                                    <div className="comment-block">
                                                        <span className="comment-by">
															<span className="blog-author-name">Henry Daniels</span>
                                                        <span className="float-right">
																<span className="blog-reply"><a href="#0"><i className="fa fa-reply"></i> Reply</a></span>
                                                        </span>
                                                        </span>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae, gravida pellentesque urna varius vitae.</p>
                                                        <span className="blog-date">December 6, 2017</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="comment">
                                                    <div className="comment-author">
                                                        <img className="avatar" alt="" src={user} />
                                                    </div>
                                                    <div className="comment-block">
                                                        <span className="comment-by">
															<span className="blog-author-name">Diana Bailey</span>
															<span className="float-right">
																<span className="blog-reply"> <a href="#0"><i className="fa fa-reply"></i> Reply</a></span>
															</span>
                                                        </span>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae, gravida pellentesque urna varius vitae.</p>
                                                        <span className="blog-date">December 7, 2017</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <div className="comment">
                                            <div className="comment-author">
                                                <img className="avatar" alt="" src={user} />
                                            </div>
                                            <div className="comment-block">
                                                <span className="comment-by">
													<span className="blog-author-name">Marie Wells</span>
													<span className="float-right">
														<span className="blog-reply"><a href="#0"><i className="fa fa-reply"></i> Reply</a></span>
													</span>
                                                </span>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                <span className="blog-date">December 11, 2017</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="comment">
                                            <div className="comment-author">
                                                <img className="avatar" alt="" src={user} />
                                            </div>
                                            <div className="comment-block">
                                                <span className="comment-by">
													<span className="blog-author-name">Pamela Curtis</span>
													<span className="float-right">
														<span className="blog-reply"><a href="#0"><i className="fa fa-reply"></i> Reply</a></span>
													</span>
                                                </span>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                <span className="blog-date">December 13, 2017</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="widget new-comment clearfix">
                                <h3>Leave Comment</h3>
                                <form>
                                    <div className="row">
                                        <div className="col-sm-8">
                                            <div className="form-group">
                                                <label>Name <span className="text-red">*</span></label>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <label>Your email address <span className="text-red">*</span></label>
                                                <input type="email" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <label>Comments</label>
                                                <textarea rows="4" className="form-control"></textarea>
                                            </div>
                                            <div className="comment-submit">
                                                <input type="submit" value="Submit" className="btn" />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <aside className="col-md-4">
                        <div className="widget search-widget">
                            <h5>Blog Search</h5>
                            <form className="search-form">
                                <div className="input-group">
                                    <input type="text" placeholder="Search..." className="form-control" />
                                    <div className="input-group-append">
                                        <button type="submit" className="btn btn-primary"><i className="fa fa-search"></i></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="widget post-widget">
                            <h5>Latest Posts</h5>
                            <ul className="latest-posts">
                                <li>
                                    <div className="post-thumb">
                                        <Link to="/blog-details">
                                            <img className="img-fluid" src={IMG01} alt="" />
                                        </Link>
                                    </div>
                                    <div className="post-info">
                                        <h4>
											<Link to="/blog-details">Lorem ipsum dolor sit amet consectetur </Link>
										</h4>
                                        <p><i aria-hidden="true" className="fa fa-calendar"></i> December 6, 2017</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="post-thumb">
                                        <Link to="/blog-details">
                                            <img className="img-fluid" src={IMG02} alt="" />
                                            </Link>
                                    </div>
                                    <div className="post-info">
                                        <h4>
											<Link to="/blog-details">Lorem ipsum dolor sit amet consectetur </Link>
										</h4>
                                        <p><i aria-hidden="true" className="fa fa-calendar"></i> December 6, 2017</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="post-thumb">
                                        <Link to="/blog-details">
                                            <img className="img-fluid" src={IMG03} alt="" />
                                            </Link>
                                    </div>
                                    <div className="post-info">
                                        <h4>
											<Link to="/blog-details">Lorem ipsum dolor sit amet consectetur </Link>
										</h4>
                                        <p><i aria-hidden="true" className="fa fa-calendar"></i> December 6, 2017</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="post-thumb">
                                        <Link to="/blog-details">
                                            <img className="img-fluid" src={IMG04} alt="" />
                                            </Link>
                                    </div>
                                    <div className="post-info">
                                        <h4>
											<Link to="/blog-details">Lorem ipsum dolor sit amet consectetur </Link>
										</h4>
                                        <p><i aria-hidden="true" className="fa fa-calendar"></i> December 6, 2017</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="widget category-widget">
                            <h5>Blog Categories</h5>
                            <ul className="categories">
                                <li><a href="#0"><i className="fa fa-long-arrow-right"></i> Lorem ipsum dolor</a></li>
                                <li><a href="#0"><i className="fa fa-long-arrow-right"></i> Lorem ipsum dolor</a></li>
                                <li><a href="#0"><i className="fa fa-long-arrow-right"></i> Lorem ipsum dolor</a></li>
                                <li><a href="#0"><i className="fa fa-long-arrow-right"></i> Lorem ipsum dolor</a></li>
                                <li><a href="#0"><i className="fa fa-long-arrow-right"></i> Lorem ipsum dolor</a></li>
                                <li><a href="#0"><i className="fa fa-long-arrow-right"></i> Lorem ipsum dolor</a></li>
                            </ul>
                        </div>
                        <div className="widget tags-widget">
                            <h5>Tags</h5>
                            <ul className="tags">
                                <li><a href="#0" className="tag">Heart</a></li>
                                <li><a href="#0" className="tag">Cancer</a></li>
                                <li><a href="#0" className="tag">Kids</a></li>
                                <li><a href="#0" className="tag">Family</a></li>
                                <li><a href="#0" className="tag">Medical</a></li>
                                <li><a href="#0" className="tag">Injection</a></li>
                                <li><a href="#0" className="tag">Secure</a></li>
                                <li><a href="#0" className="tag">Insurance</a></li>
                                <li><a href="#0" className="tag">Doctor</a></li>
                                <li><a href="#0" className="tag">Nurse</a></li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
        );
    }
};

export default BlogDetails;