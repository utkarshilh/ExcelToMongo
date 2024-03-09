import React from 'react';
import { useState } from 'react';
import * as XLSX from 'xlsx';
import './Main.css'; // Import the CSS file
import axios from 'axios';

export default function Main() {
    const [file, setFile] = useState(null);
    const [jsonData, setJsonData] = useState(null);

    const [dataToSend, setDataToSend] = useState('iuiuiuiuj');

    const handleUpload = async () => {
        if (!file) {
            alert('No file selected');
        } else {
            const reader = new FileReader();

            reader.onload = async (e) => {
                const data = e.target.result;
                const workbook = XLSX.read(data, { type: 'binary' });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const json = XLSX.utils.sheet_to_json(worksheet);

                setJsonData(JSON.stringify(json, null, 2));
                console.log(JSON.stringify(json, null, 2)); // Log the jsonData here

                try {
                    const response = await fetch('http://localhost:5038/uploadData', {
                        method: 'post',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(json), // Use json directly here
                    });

                    if (response.ok) {
                        console.log('Data sent successfully to the backend');
                    } else {
                        console.log('Failed to send data to the backend');
                    }
                } catch (error) {
                    console.error('Error sending data to the backend:', error);
                }
            };

            try {
                reader.readAsBinaryString(file);
            } catch (error) {
                console.error('Error reading file:', error);
            }
        }
    };



    const sendDataToBackend = async () => {
        try {
            // Make an HTTP POST request to your backend endpoint
            const response = await axios.post('http://localhost:5038/gggg', {
                key: 'hello', // Your data to send
                // Add other data as needed
            });

            // Handle the response from the backend
            console.log('Backend response:', response.data);
        } catch (error) {
            console.error('Error sending data to backend:', error);
        }
    };
    return (
        <div className="main-container">
            <div className="card">
                <label className="label" htmlFor="">
                    Upload file
                </label>
                <input
                    className="file-input"
                    type="file"
                    accept=".xls, .xlsx"
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <br />
                <button className="upload-button" onClick={handleUpload}>
                    Upload
                </button>
                <button onClick={sendDataToBackend}>Hello</button>
                <pre>{jsonData}</pre>
            </div>
        </div>
    );
}

