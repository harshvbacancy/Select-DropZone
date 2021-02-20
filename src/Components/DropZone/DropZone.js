import React from 'react';
import {useDropzone} from 'react-dropzone';
import './DropZone.css';


const DropZone = (props) => {
    const {
      acceptedFiles,
      getRootProps,
      getInputProps,
      open,
    } = useDropzone({
      accept: 'image/jpeg, image/png',
     

    });
  
    const acceptedFileItems = acceptedFiles.map(file => (
      <li key={file.path}>
        {file.path} - {file.size} bytes
      </li>
    ));
  
   
  
    return (
      <section className="container">
        <div {...getRootProps({ className: 'dropZone' })}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
          <button type="button" onClick={open}>
          Open File
        </button>
          <em>(Only *.jpeg and *.png images will be accepted)</em>
         
        </div>
        <aside>
          <h4>Files</h4>
          <ul>{acceptedFileItems}</ul>
         
        </aside>
      </section>
    );
  }
  
export default DropZone