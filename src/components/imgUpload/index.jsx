import React, { useState } from 'react';
import axios from 'axios';
import { EndPoints } from "../../endPoint";
import { AuthHandler } from "./../../AuthHandler";

const ImageUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    const subdomainExtractorRegex = /\@(.*?)\./;
    formData.append('file', file,`${subdomainExtractorRegex.exec(AuthHandler.getUser().username)[1]}.com`);
    const _headers = { 'Content-Type': 'multipart/form-data', "Access-Control-Allow-Origin": "*", "username": AuthHandler.getUser().username };
    const path = `${EndPoints.backendProd}/api/file/upload`
    try {
      const res = await axios.post(path, formData, {
        headers: _headers
      });
      console.log('File uploaded successfully', res.data);
    } catch (error) {
      console.error('Error uploading file', error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button type="button" onClick={handleUpload} className="btn btn-primary submit-btn">Upload</button>
    </div>
  );
};

export default ImageUpload;