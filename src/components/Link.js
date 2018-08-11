import React from 'react';

function Link(props) {
  return (
    <button
      disabled={props.active}
      onClick={props.onClick}
      style={{
        marginLeft: '4px'
      }}
    >
      {props.children}
    </button>
  )
}

export default Link;