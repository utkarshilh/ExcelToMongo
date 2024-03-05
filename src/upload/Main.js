

// import React from 'react'
// import { useState } from 'react';

// export default function Main() {


//     const [file, setFile] = useState(null);
//     const [jsondata, setJsonData] = useState(null);

//     const handleUpload = () => {
//         console.log("hello how are");

//     }



//     return (

//         <div>
//             <label htmlFor="">Uplaod file </label>
//             <input type="file" accept=".xls,xlsx," onChange={e => setFile(e.target.files[0])} />
//             <br />
//             <button onClick={handleUpload}>Upload</button>



//         </div>


//     )
// }



// Main.js
import React from 'react';
import { useState } from 'react';
import './Main.css'; // Import the CSS file

export default function Main() {
    const [file, setFile] = useState(null);
    const [jsondata, setJsonData] = useState(null);

    const handleUpload = () => {

        if (!file)
            alert("no file selected");

        else {

        }


    };

    return (
        <div className="main-container">
            <div className="card">
                <label className="label" htmlFor="">
                    Upload file
                </label>
                <input className="file-input" type="file" accept=".xls, .xlsx" onChange={(e) => setFile(e.target.files[0])} />
                <br />
                <button className="upload-button" onClick={handleUpload}>
                    Upload
                </button>
            </div>
        </div>
    );
}
