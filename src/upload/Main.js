// Main.js
import React from 'react';
import { useState } from 'react';
import * as XLSX from "xlsx";
import './Main.css'; // Import the CSS file

export default function Main() {
    const [file, setFile] = useState(null);
    const [jsonData, setJsonData] = useState(null);

    const handleUpload = () => {


        if (!file)
            alert("no file selected");
        else {

            const reader = new FileReader()

            reader.onload = (e) => {
                const data = e.target.result;
                const workbook = XLSX.read(data, { type: "binary" });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const json = XLSX.utils.sheet_to_json(worksheet);

                setJsonData(JSON.stringify(json, null, 2));

                console.log(jsonData);



            };
            reader.readAsBinaryString(file);


        };
    }

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
                <pre>{jsonData}</pre>
            </div>
        </div>
    );
};
