
import React, {useState} from 'react';
import axios from 'axios';
const File=()=>{
  
const [file,setFile] =useState([]);
const formData = new FormData();
  function handleChange(event) {
    console.log(event.target.files);
    
    console.log(event.target.files.length);
    for(let i=0;i<event.target.files.length;i++){
      formData.append('files',event.target.files[i]);
      alert("hi")
    }
    
   console.log(file);
  }
  
  async function handleSubmit(event) {
    event.preventDefault();
  console.log(file.length);
    await axios.post("http://localhost:8777/uploadFiles",formData).
    then(()=>{console.log("Sucess")}
    ).
    catch(()=>{console.log("error")})
    }

  async function filesDownload(){

    await axios.get("http://localhost:8777/downloadFile/84",
    {
      responseType: 'arraybuffer',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/pdf'
        }
    })
    .then((response) => {
      console.log(response.data);
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'Merugumala Kiran Sai.pdf'); //or any other extension
        document.body.appendChild(link);
        link.click();
    })
    .catch((error) => console.log(error));

  }

  return (
    <div className="App">
        <form  method="POST" encType="multipart/form-data">
          <h1>React File Upload</h1>
          <input type="file" onChange={handleChange} multiple/><br/>
          <button type="submit" onClick={handleSubmit}>Upload</button><br/>
        </form>
         
        <img src={`http://localhost:8777/downloadFile/83`} style={{width:'500px',heigth:'500px'}} alt='Kiran'></img>  <br/>

        <button onClick={() => {filesDownload()}}>Download </button>
    </div>
  );
  }
export default File;