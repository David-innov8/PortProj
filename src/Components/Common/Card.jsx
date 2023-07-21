import React from 'react'

function Card(props) {
    return (
      <div className=" h-250 w-250 bg-white rounded-lg shadow-md">
        {props.children}
      </div>
    );
  }

export default Card