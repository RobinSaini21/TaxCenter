import React, { useState } from "react";
import axios from "axios";
import "./Uploadpdf.css";
import { useNavigate } from "react-router";
import { filenameapi } from "../../services/AuthApi";
import instance from "../../http/Instance";
import FileUpload from "./UploadFiles/FileUpload";




export default function UploadPdf() {
  const navigate = useNavigate()
  const [file, setFile] = useState(null);
  const UPLOAD_ENDPOINT =
  "http://localhost/4000/upload";
  // const uploadFile = async file => {
  //   const formData = new FormData();
  //   formData.append("avatar", file);

  //   return await instance.post("http://localhost/4000/upload", formData, {
  //     headers: {
  //       "content-type": "multipart/form-data"
  //     }
  //   });
  // };

  const handleSubmit = async e => {
    e.preventDefault();
     navigate("/salary")
    //  uploadFile(file)
    console.log(file.name)
const fileName = file.name;
filenameapi(fileName)
  };


  const handleOnChange = e => {
    console.log(e.target.files[0].name);
    setFile(e.target.files[0]);
  };

  return (
    <>
  {/* <form onSubmit={handleSubmit}>
    <div className="upload_body">
<h4>Upload your Form 16 PDF and file your Income tax return now</h4>
        <input  type="file" className="UpLoad_in" style={{width: "700px"}} onChange={handleOnChange} ></input>

 <button className="UpLoad_button"type="submit">Upload File</button>
     </div>
     </form>  */}

<FileUpload/>
</>
  );
}


