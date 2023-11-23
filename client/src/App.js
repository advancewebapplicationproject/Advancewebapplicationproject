import React, { useEffect, useState } from 'react';

function App() {
  const [backendData, setBackendData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/my-protected-resource", {
  method: 'GET',
  headers: {
    'Authorization': 'Basic ' + btoa('userOne:passwordOne')
  }
})
.then(response => response.text())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
  } ,



       []);

  return (
    <div>
      {backendData.users ? (
        backendData.users.map((user, i) => <p key={i}>{user}</p>)
      ) : (
        <p>Loading.....</p>
      )}
    </div>
  );
}

export default App;
