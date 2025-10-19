import React, { Component } from "react";
import ReactSummernote from "react-summernote";

class ComposeMail extends Component {
  onImageUpload = (fileList) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      ReactSummernote.insertImage(reader.result);
    };
    reader.readAsDataURL(fileList[0]);
  };
  render() {
    return (
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-sm-12">
              <h4 className="page-title">Compose</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="card-box">
                <form>
                  <div className="form-group">
                    <input type="email" placeholder="To" className="form-control" />
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          placeholder="Cc"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          placeholder="Bcc"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Subject"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <ReactSummernote
                      value="Default value"
                      options={{
                        lang: "En",
                        height: 150,
                        dialogsInBody: true,
                        toolbar: [
                          ["style", ["style"]],
                          ["font", ["bold", "underline", "clear"]],
                          ["fontname", ["fontname"]],
                          ["para", ["ul", "ol", "paragraph"]],

                          ["insert", ["link", "picture", "video"]],
                        ],
                      }}
                      onChange={this.onChange}
                      onImageUpload={this.onImageUpload}
                    />
                  </div>
                  <div className="form-group mb-0">
                    <div className="text-center compose-btn">
                      <button className="btn btn-primary">
                        <span>Send</span> <i className="fa fa-send m-l-5"></i>
                      </button>
                      <button className="btn btn-success m-l-5" type="button">
                        <span>Draft</span> <i className="fa fa-floppy-o m-l-5"></i>
                      </button>
                      <button className="btn btn-success m-l-5" type="button">
                        <span>Delete</span> <i className="fa fa-trash-o m-l-5"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ComposeMail;
