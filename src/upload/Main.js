// import React, { useState } from 'react';
// import * as XLSX from 'xlsx';

// function main() {
//     const [file, setFile] = useState(null);
//     const [jsonData, setJsonData] = useState('');

//     handleConvert = () =>{

//     }
//     return (
//         <div>
//             <input type="file" accept=".xls,.xlsx" onChange={e => setFile(e.target.files[0])} />
//             <button onClick={handleConvert}>Convert</button>
//             <pre>{jsonData}</pre>
//         </div>
//     );
// }

// export default main


import React from 'react'
import { useState } from 'react';

export default function Main() {


    const [comments, setComments] = useState([]);

    return (
        <div>
            <input type="text" />
        </div>
    )
}
