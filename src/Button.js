import React from 'react';
function Button(props) {
  console.log(props);
  return (
    <button onClick={props.clickLoadHandler}>{props.children}</button>
  )
}
export default Button
