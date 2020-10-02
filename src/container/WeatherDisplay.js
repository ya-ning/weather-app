import React, { Component, Fragment } from 'react';
import axios from 'axios';

import './WeatherDisplay.css';

// https://openweathermap.org/current
// api.openweathermap.org/data/2.5/weather?q={city name}&appid=974c880ed3a74635d0881cafb067975c

class WeatherDisplay extends Component {
  state = {
    payload: [],
  };

  componentDidMount() {
    axios
      .get(
        'http://api.openweathermap.org/data/2.5/weather?q=Taipei&appid=974c880ed3a74635d0881cafb067975c'
      )
      .then((response) => {
        console.log(response);
        this.setState({ payload: response.data });
      });
  }
  // componentDidMount allows to do async function
  // so we do not need an async function
  // componentDidMount = async () => {
  //   const res = await fetch(
  //     'http://api.openweathermap.org/data/2.5/weather?q=Taipei&appid=974c880ed3a74635d0881cafb067975c'
  //   );

  //   // retun a promise
  //   let payload = await res.json();
  //   this.setState({ payload: payload });
  //   console.log(this.state.payload);
  //   console.log('it is running');
  // };

  render() {
    return (
      <Fragment>
        <h2>{JSON.stringify(this.state.payload)}</h2>

        <div className="location">
          <h1>Taipei, Taiwan GMT+8</h1>
          <h3 className="location__date">Friday | 02 Oct 2020</h3>
        </div>

        <div>
          <div className="temperature">
            <h3 className="temperature__current">29°C</h3>
            <h3>Feels Like: 29°C</h3>
          </div>

          <div className="description">
            <div>ICON</div>
            <h3>Few Clouds</h3>
          </div>
        </div>

        <div className="suntime">
          <h3>Sunrise at 5:47</h3>
          <h3>Sunset at 17:40</h3>
        </div>
      </Fragment>
    );
  }
}

export default WeatherDisplay;
