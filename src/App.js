import React, { useState, useEffect } from 'react';
import ImageGrid from './components/ImageGrid';
import Table from './components/Table';
import './App.css';

function App() {

  const [imgData, setImgData] = useState([]);
  const [tableData, setTableData] = useState([]);


  useEffect(() => {
    async function fetchData() {
      let data = await fetch('https://jsonplaceholder.typicode.com/photos/?_limit=3');
      let imageData = await data.json();

      setImgData(imageData);
    }

    fetchData();
  }, [])


  const isCompareClikced = (imgId) => {
    let result = tableData.filter((item) => item.id === imgId);
    if (result.length) {
      return true
    } else {
      return false
    }
  }


  const buttonToggleHandler = (imgId) => {
    if (isCompareClikced(imgId)) {
      let updatedTableData = tableData.filter((imgItem) => imgItem.id !== imgId);
      setTableData(updatedTableData);
    } else {
      let updatedTableData = imgData.filter((imgItem) => imgItem.id === imgId);
      setTableData([].concat.apply([...tableData], updatedTableData));
    }
  }

  return (
    <div className="App">
      
      <div className="grid">
        {imgData.map((imgItem, index) => {
          return <ImageGrid
            key={index}
            imgUrl={imgItem.url}
            imgTitle={imgItem.title}
            imgId={imgItem.id}
            isCompareClikced={isCompareClikced}
            buttonToggleHandler={() => buttonToggleHandler(imgItem.id)}
          />
        })}
      </div>
      <Table dataObj={tableData} />
    </div>
  );
}

export default App;
