import React, { useEffect, useState } from 'react'
import './App.css';
function App(){
   const[data,setData] = useState([]);
   const [selectedRows, setSelectedRows] = useState([]);

   const handleRowClick = (id) => {
    setSelectedRows(prevSelectedRows => {
      if (prevSelectedRows.includes(id)) {
        return prevSelectedRows.filter(rowId => rowId !== id);
      } else {
        return [...prevSelectedRows, id];
      }
    });
  };

   useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/comments?fbclid=IwZXh0bgNhZW0CMTAAAR0a1Fkb6NSTc1G7ej_A8VqXhKIgxrZTQ70Kk17ZQ3bWXHx7zdr9Fr2H2ng_aem_AeFybEF6WlnlFFSsgBuk3IrPlQMYldM2_BOSgiR6K1oj18QF-bwqzhqZAvNAO4qA7pZVDssc8m4xlnYoholMpSV7')
    .then(response => response.json())
    .then(data => setData(data))
    .catch(error => console.error('Error in datafetching', error));
   },[]);

   
  return (
    <>
      <div style={{width:"100%",display:'flex',justifyContent:'center'}}>
      <table style={{width:"50%"}}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Comment</th>
            <th>Email</th>
            <th>Selected</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr className='pointer' key={item.id} onClick={() => handleRowClick(item.id)}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.body}</td>
              <td>{item.email}</td>
              <td>
                <input type="checkbox" checked={selectedRows.includes(item.id)}
/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default App;
