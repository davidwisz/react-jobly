import React from 'react';

function Alert({errors}) {
  return (
    <div>
      <div className="alert alert-danger">
        {errors.map(e => {
          return <p>{e}</p>
        })}
      </div>
    </div>
  )
}

export default Alert;