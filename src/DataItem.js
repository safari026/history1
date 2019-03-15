import React from 'react';
import Button from './Button';
function DataItem(props) {
  console.log(props);
  return (
    <li>
      <div>
        <p>{props.children.title}</p>
        <hr/>
        <p>{props.children.body}</p>
      </div>
      <Button clickLoadHandler={ () => props.clickLoadHandler(props.children.id) }>Delete</Button>

        </li>
      )
    }
        export default DataItem