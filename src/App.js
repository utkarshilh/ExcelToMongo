import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import CardCompnent from './CardCompnent';



function App() {

  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {

      try {
        const response = await fetch("http://localhost:5038/collectionDetails");
        console.log("this is response" + response);
        const jsonData = await response.json();
        console.log("this is jsonData" + JSON.stringify(jsonData.document));

        setData(jsonData.document);

      }
      catch (error) {
        console.log('error fetching data', error);
        alert("unable to get data");


      }

    };
    fetchData();
  }, []);
  function handleEdit() {
    console.log("hello");


  }
  function handleDelete() {
    console.log("hello");


  }
  return (
    <div className="App">
      <h2>To do app</h2>


      {data.map((item) => (
        <CardCompnent
          key={item.id} // Add a unique key for each card, assuming there's an 'id' property in your data
          name={item.name} // Assuming there's a 'name' property in your data
          email={item.email} // Assuming there's an 'email' property in your data
          onEdit={() => handleEdit(item.id)} // Pass the appropriate edit function with item id
          onDelete={() => handleDelete(item.id)} // Pass the appropriate delete function with item id
        />
      ))}

    </div>
  );
}

export default App;



// import React from 'react'
// import Main from './upload/Main'

// export default function App() {
//   return (
//     <div className="app">
//       <Main />
//     </div>
//   )
// }
