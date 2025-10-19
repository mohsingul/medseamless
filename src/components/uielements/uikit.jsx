import React from 'react';

const uikit=()=>{
    
    return(
        <div className="page-wrapper uielement">
            <div className="content">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card-box">
                            <h4 className="card-title">Default Button</h4>
							<button type="button" className="btn btn-primary">Primary</button>
							<button type="button" className="btn btn-secondary">Secondary</button>
							<button type="button" className="btn btn-success">Success</button>
							<button type="button" className="btn btn-danger">Danger</button>
							<button type="button" className="btn btn-warning">Warning</button>
							<button type="button" className="btn btn-info">Info</button>
							<button type="button" className="btn btn-light">Light</button>
							<button type="button" className="btn btn-dark">Dark</button>
							<button type="button" className="btn btn-link">Link</button>
                            <hr />
                            <h4 className="card-title">Button Sizes</h4>
                            <p>
								<button type="button" className="btn btn-primary btn-lg">Primary</button>
								<button type="button" className="btn btn-secondary btn-lg">Secondary</button>
								<button type="button" className="btn btn-success btn-lg">Success</button>
								<button type="button" className="btn btn-danger btn-lg">Danger</button>
								<button type="button" className="btn btn-warning btn-lg">Warning</button>
								<button type="button" className="btn btn-info btn-lg">Info</button>
								<button type="button" className="btn btn-light btn-lg">Light</button>
								<button type="button" className="btn btn-dark btn-lg">Dark</button>
                            </p>
                            <p>
								<button type="button" className="btn btn-primary">Primary</button>
								<button type="button" className="btn btn-secondary">Secondary</button>
								<button type="button" className="btn btn-success">Success</button>
								<button type="button" className="btn btn-danger">Danger</button>
								<button type="button" className="btn btn-warning">Warning</button>
								<button type="button" className="btn btn-info">Info</button>
								<button type="button" className="btn btn-light">Light</button>
								<button type="button" className="btn btn-dark">Dark</button>
                            </p>
                            <p>
								<button type="button" className="btn btn-primary btn-sm">Primary</button>
								<button type="button" className="btn btn-secondary btn-sm">Secondary</button>
								<button type="button" className="btn btn-success btn-sm">Success</button>
								<button type="button" className="btn btn-danger btn-sm">Danger</button>
								<button type="button" className="btn btn-warning btn-sm">Warning</button>
								<button type="button" className="btn btn-info btn-sm">Info</button>
								<button type="button" className="btn btn-light btn-sm">Light</button>
								<button type="button" className="btn btn-dark btn-sm">Dark</button>
                            </p>
                            <hr />
                            <h4 className="card-title">Button Groups</h4>
                            <br />
                            <div className="btn-toolbar">
                                <div className="btn-group btn-group-lg">
                                    <button type="button" className="btn btn-primary">Left</button>
                                    <button type="button" className="btn btn-primary">Middle</button>
                                    <button type="button" className="btn btn-primary">Right</button>
                                </div>
                            </div>
                            <br />
                            <div className="btn-toolbar">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-primary">Left</button>
                                    <button type="button" className="btn btn-primary">Middle</button>
                                    <button type="button" className="btn btn-primary">Right</button>
                                </div>
                            </div>
                            <br />
                            <div className="btn-toolbar">
                                <div className="btn-group btn-group-sm">
                                    <button type="button" className="btn btn-primary">Left</button>
                                    <button type="button" className="btn btn-primary">Middle</button>
                                    <button type="button" className="btn btn-primary">Right</button>
                                </div>
                            </div>
                        </div>
                        <div className="card-box">
                            <h4 className="card-title">Alerts</h4>
							<div className="alert alert-warning alert-dismissible fade show" role="alert">
								<strong>Warning!</strong> There was a problem with your <a href="#0" className="alert-link">network connection</a>.
								<button type="button" className="close" data-dismiss="alert" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="alert alert-danger alert-dismissible fade show" role="alert">
								<strong>Error!</strong> A <a href="#0" className="alert-link">problem</a> has been occurred while submitting your data.
								<button type="button" className="close" data-dismiss="alert" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="alert alert-success alert-dismissible fade show" role="alert">
								<strong>Success!</strong> Your <a href="#0" className="alert-link">message</a> has been sent successfully.
								<button type="button" className="close" data-dismiss="alert" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="alert alert-info alert-dismissible fade show" role="alert">
								<strong>Note!</strong> Please read the <a href="#0" className="alert-link">comments</a> carefully.
								<button type="button" className="close" data-dismiss="alert" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
                        </div>
                        <div className="card-box">
                            <h4 className="card-title">Dropdowns within Text</h4>
							<div className="dropdown">
								<a className="dropdown-toggle" href="#0" role="button" data-toggle="dropdown" aria-expanded="false"> Dropdown </a>
								<div className="dropdown-menu">
									<a className="dropdown-item" href="#0">Action</a>
									<a className="dropdown-item" href="#0">Another action</a>
								</div>
							</div>
                            <hr />
                            <h4 className="card-title">Dropdowns within Buttons</h4>
							<div className="btn-group">
								<button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action</button>
								<div className="dropdown-menu">
									<a className="dropdown-item" href="#0">Action</a>
									<a className="dropdown-item" href="#0">Another action</a>
									<div className="dropdown-divider"></div>
									<a className="dropdown-item" href="#0">Separated link</a>
								</div>
							</div>
							<div className="btn-group">
								<button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action</button>
								<div className="dropdown-menu">
									<a className="dropdown-item" href="#0">Action</a>
									<a className="dropdown-item" href="#0">Another action</a>
									<div className="dropdown-divider"></div>
									<a className="dropdown-item" href="#0">Separated link</a>
								</div>
							</div>
							<div className="btn-group">
								<button type="button" className="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action</button>
								<div className="dropdown-menu">
									<a className="dropdown-item" href="#0">Action</a>
									<a className="dropdown-item" href="#0">Another action</a>
									<div className="dropdown-divider"></div>
									<a className="dropdown-item" href="#0">Separated link</a>
								</div>
							</div>
							<div className="btn-group">
								<button type="button" className="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action</button>
								<div className="dropdown-menu">
									<a className="dropdown-item" href="#0">Action</a>
									<a className="dropdown-item" href="#0">Another action</a>
									<div className="dropdown-divider"></div>
									<a className="dropdown-item" href="#0">Separated link</a>
								</div>
							</div>
							<div className="btn-group">
								<button type="button" className="btn btn-warning dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action</button>
								<div className="dropdown-menu">
									<a className="dropdown-item" href="#0">Action</a>
									<a className="dropdown-item" href="#0">Another action</a>
									<div className="dropdown-divider"></div>
									<a className="dropdown-item" href="#0">Separated link</a>
								</div>
							</div>
							<div className="btn-group">
								<button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action</button>
								<div className="dropdown-menu">
									<a className="dropdown-item" href="#0">Action</a>
									<a className="dropdown-item" href="#0">Another action</a>
									<div className="dropdown-divider"></div>
									<a className="dropdown-item" href="#0">Separated link</a>
								</div>
							</div>
                            <hr />
                            <h4 className="card-title">Split button dropdowns</h4>
							<div className="btn-group">
								<button type="button" className="btn btn-primary">Action</button>
								<button type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									<span className="sr-only">Toggle Dropdown</span>
								</button>
								<div className="dropdown-menu">
									<a className="dropdown-item" href="#0">Action</a>
									<a className="dropdown-item" href="#0">Another action</a>
									<div className="dropdown-divider"></div>
									<a className="dropdown-item" href="#0">Separated link</a>
								</div>
							</div>
							<div className="btn-group">
								<button type="button" className="btn btn-secondary">Action</button>
								<button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									<span className="sr-only">Toggle Dropdown</span>
								</button>
								<div className="dropdown-menu">
									<a className="dropdown-item" href="#0">Action</a>
									<a className="dropdown-item" href="#0">Another action</a>
									<div className="dropdown-divider"></div>
									<a className="dropdown-item" href="#0">Separated link</a>
								</div>
							</div>
							<div className="btn-group">
								<button type="button" className="btn btn-info">Action</button>
								<button type="button" className="btn btn-info dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									<span className="sr-only">Toggle Dropdown</span>
								</button>
								<div className="dropdown-menu">
									<a className="dropdown-item" href="#0">Action</a>
									<a className="dropdown-item" href="#0">Another action</a>
									<div className="dropdown-divider"></div>
									<a className="dropdown-item" href="#0">Separated link</a>
								</div>
							</div>
							<div className="btn-group">
								<button type="button" className="btn btn-success">Action</button>
								<button type="button" className="btn btn-success dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									<span className="sr-only">Toggle Dropdown</span>
								</button>
								<div className="dropdown-menu">
									<a className="dropdown-item" href="#0">Action</a>
									<a className="dropdown-item" href="#0">Another action</a>
									<div className="dropdown-divider"></div>
									<a className="dropdown-item" href="#0">Separated link</a>
								</div>
							</div>
							<div className="btn-group">
								<button type="button" className="btn btn-warning">Action</button>
								<button type="button" className="btn btn-warning dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									<span className="sr-only">Toggle Dropdown</span>
								</button>
								<div className="dropdown-menu">
									<a className="dropdown-item" href="#0">Action</a>
									<a className="dropdown-item" href="#0">Another action</a>
									<div className="dropdown-divider"></div>
									<a className="dropdown-item" href="#0">Separated link</a>
								</div>
							</div>
							<div className="btn-group">
								<button type="button" className="btn btn-danger">Action</button>
								<button type="button" className="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									<span className="sr-only">Toggle Dropdown</span>
								</button>
								<div className="dropdown-menu">
									<a className="dropdown-item" href="#0">Action</a>
									<a className="dropdown-item" href="#0">Another action</a>
									<div className="dropdown-divider"></div>
									<a className="dropdown-item" href="#0">Separated link</a>
								</div>
							</div>
                        </div>
                        <div className="card-box progress-example">
                            <h4 className="card-title">Progress Bars</h4>
                            <h5 className="text-muted">Large Progress Bars</h5>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div>
                                        <div className="progress progress-lg">
                                            <div className="progress-bar" role="progressbar" style={{width: '10%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div className="progress progress-lg">
                                            <div className="progress-bar bg-success" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div className="progress progress-lg">
                                            <div className="progress-bar bg-info" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div className="progress progress-lg">
                                            <div className="progress-bar bg-warning" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div className="progress progress-lg">
                                            <div className="progress-bar bg-danger" role="progressbar" style={{width: '100'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="progress progress-lg">
                                        <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: '10%'}}aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div className="progress progress-lg">
                                        <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: '25%'}}aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div className="progress progress-lg">
                                        <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width: '50%'}}aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div className="progress progress-lg">
                                        <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{width: '75%'}}aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div className="progress progress-lg">
                                        <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                            <h5 className="text-muted">Default Progress Bars</h5>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{width: '10%'}}aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar bg-success" role="progressbar" style={{width: '25%'}}aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar bg-info" role="progressbar" style={{width: '50%'}}aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar bg-warning" role="progressbar" style={{width: '75%'}}aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar bg-danger" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: '10%'}}aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: '25%'}}aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width: '50%'}}aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{width: '75%'}}aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                            <h5 className="text-muted">Medium Progress Bars</h5>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div>
                                        <div className="progress progress-md">
                                            <div className="progress-bar" role="progressbar" style={{width: '10%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div className="progress progress-md">
                                            <div className="progress-bar bg-success" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div className="progress progress-md">
                                            <div className="progress-bar bg-info" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div className="progress progress-md">
                                            <div className="progress-bar bg-warning" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div className="progress progress-md">
                                            <div className="progress-bar bg-danger" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="progress progress-md">
                                        <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: '10%'}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div className="progress progress-md">
                                        <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div className="progress progress-md">
                                        <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div className="progress progress-md">
                                        <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div className="progress progress-md">
                                        <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>''
                            <h5 className="text-muted">Small Progress Bars</h5>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div>
                                        <div className="progress progress-sm">;
                                            <div className="progress-bar" role="progressbar" style={{width: '10%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div className="progress progress-sm">
                                            <div className="progress-bar bg-success" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div className="progress progress-sm">
                                            <div className="progress-bar bg-info" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div className="progress progress-sm">
                                            <div className="progress-bar bg-warning" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div className="progress progress-sm">
                                            <div className="progress-bar bg-danger" role="progressbar" style={{width: '10%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="progress progress-sm">
                                        <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: '10%'}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div className="progress progress-sm">
                                        <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div className="progress progress-sm">
                                        <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div className="progress progress-sm">
                                        <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div className="progress progress-sm">
                                        <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width: '10%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                            <h5 className="text-muted">Extra Small Progress Bars</h5>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div>
                                        <div className="progress progress-xs">
                                            <div className="progress-bar w-75" role="progressbar" style={{width: '10%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div className="progress progress-xs">
                                            <div className="progress-bar bg-success" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div className="progress progress-xs">
                                            <div className="progress-bar bg-info" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div className="progress progress-xs">
                                            <div className="progress-bar bg-warning" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div className="progress progress-xs">
                                            <div className="progress-bar bg-danger" role="progressbar" style={{width: '10%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="progress progress-xs">
                                        <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: '10%'}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div className="progress progress-xs">
                                        <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div className="progress progress-xs">
                                        <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div className="progress progress-xs">
                                        <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div className="progress progress-xs">
                                        <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width: '10%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card-box pagination-box">
                                    <h4 className="card-title">Pagination</h4>
									<div>
										<ul className="pagination">
											<li className="page-item disabled">
												<a className="page-link" href="#0" tabIndex="-1">Previous</a>
											</li>
											<li className="page-item"><a className="page-link" href="#0">1</a></li>
											<li className="page-item active">
												<a className="page-link" href="#0">2 <span className="sr-only">(current)</span></a>
											</li>
											<li className="page-item"><a className="page-link" href="#0">3</a></li>
											<li className="page-item">
												<a className="page-link" href="#0">Next</a>
											</li>
										</ul>
									</div>
									<div>
										<ul className="pagination">
											<li className="page-item">
												<a className="page-link" href="#0" aria-label="Previous">
													<span aria-hidden="true">&laquo;</span>
													<span className="sr-only">Previous</span>
												</a>
											</li>
											<li className="page-item"><a className="page-link" href="#0">1</a></li>
											<li className="page-item"><a className="page-link" href="#0">2</a></li>
											<li className="page-item"><a className="page-link" href="#0">3</a></li>
											<li className="page-item">
												<a className="page-link" href="#0" aria-label="Next">
													<span aria-hidden="true">&raquo;</span>
												<span className="sr-only">Next</span>
												</a>
											</li>
										</ul>
									</div>
									<div>
										<ul className="pagination pagination-lg">
											<li className="page-item disabled">
												<a className="page-link" href="#0" tabIndex="-1">Previous</a>
											</li>
											<li className="page-item"><a className="page-link" href="#0">1</a></li>
											<li className="page-item active">
												<a className="page-link" href="#0">2 <span className="sr-only">(current)</span></a>
											</li>
											<li className="page-item"><a className="page-link" href="#0">3</a></li>
											<li className="page-item">
												<a className="page-link" href="#0">Next</a>
											</li>
										</ul>
									</div>
									
									<div>
										<ul className="pagination pagination-sm">
											<li className="page-item disabled">
												<a className="page-link" href="#0" tabIndex="-1">Previous</a>
											</li>
											<li className="page-item"><a className="page-link" href="#0">1</a></li>
											<li className="page-item active">
												<a className="page-link" href="#0">2 <span className="sr-only">(current)</span></a>
											</li>
											<li className="page-item"><a className="page-link" href="#0">3</a></li>
											<li className="page-item">
												<a className="page-link" href="#0">Next</a>
											</li>
										</ul>
									</div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-box">
                                    <h4 className="card-title">Breadcrumbs</h4>
									<nav aria-label="breadcrumb">
										<ol className="breadcrumb">
											<li className="breadcrumb-item active" aria-current="page">Home</li>
										</ol>
									</nav>

									<nav aria-label="breadcrumb">
										<ol className="breadcrumb">
											<li className="breadcrumb-item"><a href="#0">Home</a></li>
											<li className="breadcrumb-item active" aria-current="page">Products</li>
										</ol>
									</nav>

									<nav aria-label="breadcrumb">
										<ol className="breadcrumb">
											<li className="breadcrumb-item"><a href="#0">Home</a></li>
											<li className="breadcrumb-item"><a href="#0">Products</a></li>
											<li className="breadcrumb-item active" aria-current="page">Accessories</li>
										</ol>
									</nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </div>   
    )
  }

  export default uikit;