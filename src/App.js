import React from 'react';
import './App.css';

function App() {
  fetch(
    'http://api.openweathermap.org/data/2.5/weather?q=Taipei&appid=974c880ed3a74635d0881cafb067975c'
  )
    .then((res) => {
      return res.json();
    })
    .then((payload) => {
      console.log(payload);
    });

  // SAME AS ABOVE
  (async function () {
    const res = await fetch(
      'http://api.openweathermap.org/data/2.5/weather?q=Taipei&appid=974c880ed3a74635d0881cafb067975c'
    );

    // retun a promise
    const payload = await res.json();

    console.log(payload);
  })();
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
