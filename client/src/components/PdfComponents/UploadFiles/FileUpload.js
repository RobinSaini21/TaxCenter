import React, { Fragment, useState } from "react";
import Message from "./Message";
import Progress from "./Progress";
import instance from "../../../http/Instance";
import axios from "axios";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { pdfsuccess } from "../../../Store/actions/PdfActions";
import { useDispatch } from "react-redux";
import { extracteddata } from "../../../Store/actions/PdfActions";

const FileUpload = () => {
  const userLoggedIn = useSelector((store) => store.auth.userLoggedIn);
  // const userLoggedIn = useSelector((state) => state.userLoggedIn);
  // console.log("fileuplaod",userLoggedIn)
  const auth = useSelector((store) => store.auth.auth_token);
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Choose File");
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState("");
  const [uploadPercentage, setUploadPercentage] = useState(0);

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await instance.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          setUploadPercentage(
            parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            )
          );
        },
      });
      console.log("Normal text file", res.data.data);
      const data = res.data.data;
      //  const TaxableSalary = data.search(266750)
      const pannum = data.substring(420, 430);
      const tannub = data.substring(451, 461);
      const salarysection1 = data.substring(1099, 1105);
      const standarDeduction1 = data.substring(7396, 7401);
      const incomefromsalary1 = data.substring(7699, 7705);
      const c801 = data.substring(8270, 8275);
      const d801 = data.substring(999, 1003);
      const totaldeduciton1 = data.substring(9535, 9540);
      const totaltaxdeducted1 = data.substring(1085, 1089);
      const TaxableSalary = data.substring(9562, 9568);

      console.log("TaxableSalary", TaxableSalary);
      console.log("pan", pannum);
      console.log("tan", tannub);
      console.log("salarysection", salarysection1);
      console.log("standarDeduction", standarDeduction1);
      console.log("incomefromsalary", incomefromsalary1);
      console.log("c80", c801);
      console.log("d80", d801);
      console.log("totaldeduciton", totaldeduciton1);
      console.log("totaltaxdeducted", totaltaxdeducted1);

      const extracteddata_1 = {
        pannum,
        tannub,
        salarysection1,
        standarDeduction1,
        incomefromsalary1,
        c801,
        d801,
        totaldeduciton1,
        totaltaxdeducted1,
        TaxableSalary,
      };

      dispatch(extracteddata(extracteddata_1));
      localStorage.setItem("FORM16_DATA", extracteddata);
      // Clear percentage
      setTimeout(() => setUploadPercentage(0), 10000);

      const { fileName, filePath } = res.data;

      setUploadedFile({ fileName, filePath });

      setMessage("File Uploaded");
    } catch (err) {
      if (err.response.status === 500) {
        setMessage("There was a problem with the server");
      } else {
        setMessage(err.response.data.msg);
      }
      setUploadPercentage(0);
    }
    // console.log("FILE FOROM UPLOAD FILES",filename)
    //     if(file === ''){
    //        Navigate("/uploadpdf")
    //       alert("Choose A File")
    //     }
    //     dispatch(pdfsuccess())

    //     if(userLoggedIn){

    //     Navigate(`/form16/${auth}`)

    //   }  else  {
    //  Navigate("/login")
    //   }
    if (userLoggedIn && file !== "") {
      Navigate(`/form16/${auth}`);
    } else if (file === "") {
      alert("Please Select A File");
    } else if (!userLoggedIn) {
      Navigate("/login");
      dispatch(pdfsuccess());
    }
  };

  return (
    <Fragment>
      {message ? <Message msg={message} /> : null}
      <form onSubmit={onSubmit}>
        <div className="custom-file mb-4">
          <input
            type="file"
            className="custom-file-input"
            id="customFile"
            onChange={onChange}
          />
          <label className="custom-file-label" htmlFor="customFile">
            {filename}
          </label>
        </div>

        <Progress percentage={uploadPercentage} />

        <input
          type="submit"
          value="Upload"
          className="btn btn-primary btn-block mt-4"
        />
      </form>
      {uploadedFile ? (
        <div className="row mt-5">
          <div className="col-md-6 m-auto">
            <h3 className="text-center">{uploadedFile.fileName}</h3>
            <img style={{ width: "100%" }} src={uploadedFile.filePath} alt="" />
          </div>
        </div>
      ) : null}
    </Fragment>
  );
};

export default FileUpload;
