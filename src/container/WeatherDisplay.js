import React, { Component, Fragment } from 'react';
import axios from 'axios';

import Details from '../components/Details';

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
    // const details = this.state.payload.map((data) => {
    //   return <Details city={data.name} />;
    // });
    return (
      <Fragment>
        {/* {details} */}
        <h1>Location: Taipei</h1>
        <h2>{JSON.stringify(this.state.payload)}</h2>
        <h3>temp_min: C - temp_max C</h3>
        <h3>Feels Like: </h3>
        <h3>Humidity:</h3>
        <h3>Sunrise: </h3>
        <h3>Sunset: </h3>
      </Fragment>
    );
  }
}

export default WeatherDisplay;
