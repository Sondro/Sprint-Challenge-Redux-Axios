import React from 'react';

const Smurf = (props) => {
  return (
    <div className="Smurf">
      <h3>{props.name} <button onMouseDown=''>X</button></h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} old</p>
    </div>
  );
}

export default Smurf;