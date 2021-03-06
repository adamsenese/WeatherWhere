var React = require('react');

var About = (props) => {
  return (
    <div>
    <h1 className="text-center page-title">About</h1>
    <p>This application is built by <a href="https://senese.io">Adam Senese</a> using React and the Open Weather Map API. <a href="https://github.com/adamsenese/WeatherWhere">Check it out on GitHub.</a></p>
    <ul>
      <li>
        <a href="https://facebook.github.io/react/">React</a> - JavaScript framework
      </li>
      <li>
        <a href="https://facebook.github.io/react/">Open Weather Map</a> - Weather API
      </li>
    </ul>

    </div>
  );
};

module.exports = About;
