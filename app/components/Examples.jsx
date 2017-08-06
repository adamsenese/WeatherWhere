var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
    <h1 className="text-center">Need help?</h1>
    <p>Here are some example locations to try out:</p>

    <ol>
      <li>
        <Link to='/?location=Chicago'>Chicago, IL</Link>
      </li>
      <li>
        <Link to='/?location=New York'>New York, NY</Link>
      </li>
      <li>
        <Link to='/?location=Los Angeles'>Los Angeles, CA</Link>
      </li>
      <li>
        <Link to='/?location=Portland'>Portland, OR</Link>
      </li>
      <li>
        <Link to='/?location=Austin'>Austin, TX</Link>
      </li>
      <li>
        <Link to='/?location=Miami'>Miami, FL</Link>
      </li>
      <li>
        <Link to='/?location=Palos Park'>Palos Park, IL</Link>
      </li>
    </ol>
    </div>
  );
};

module.exports = Examples;
