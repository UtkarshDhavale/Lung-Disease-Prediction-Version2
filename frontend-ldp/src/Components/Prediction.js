import { useState, useEffect } from "react";
import axios from "axios";

function Prediction() {
  const [data, setData] = useState("");
  const [val, setVal] = useState("Upload Image to Predict");
  const [filename, setFilename] = useState("No file Uploaded");
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000")
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  const [file, setFile] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("file", file);

    try {
      axios.post("http://localhost:5000/upload", formData).then((res) => {
        console.log(res.data.result);
        setVal(res.data.result +" Detected");
      });
      alert("File uploaded successfully");
    } catch (error) {
      console.error(error);
    }

  };
  const handleFileUpload = (event) => {
    try{
        const file = event.target.files[0];
        setFilename(file.name);
        setImage(URL.createObjectURL(file));
    }
    catch(error){
        console.error(error);
    }
  };

  return (
    <>
      <div className="container" id="predict" style={{paddingTop: "10.5rem", paddingBottom:"10.5rem"}}>
        <div className="text-center">
          <h2 className="section-heading text-uppercase" style={{fontSize: "25px"}}>Upload X-Ray Image</h2>
          <h3 className="section-subheading text-muted" style={{fontSize: "15px"}}>Please select the image you want to diagnose
          </h3>
        </div>
        <center>
          <div className="col-lg-6">
            <div className="card" style={{width: "25rem"}}>
                <p className="card-title" style={{textAlign: "center", paddingTop: "10px", paddingBottom: "10px", color:"white", backgroundColor:"#212529"}}>Chest X-Ray</p>
                <img className="card-img-top" src={image===null?"\\assets\\img\\test.png":image} height="200px" alt="Card image cap"/>
                <div className="card-body">
                    <p className="card-text"></p>
                    <div className="text-center">
                        <form onSubmit = {handleSubmit}>  
                          <input type="file"  name="file"  className="hidden" onChange={(e) => {setFile(e.target.files[0]); setVal("Click on Upload Button"); handleFileUpload(e) }} accept=".png, .jpg, .jpeg"/>
                          <br/><br/>
                          <input type = "submit" value="Upload" className="btn btn-success"/> 
                        </form>
                    </div>  
                </div>
            </div>
            <div style={{textAlign: "center", color: "black", paddingTop:"10px"}}>
              <b>{val}</b>
            </div>
          </div>
        </center>
      </div>
    </>
  );
}

export default Prediction;