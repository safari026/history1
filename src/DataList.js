import React from 'react';
import DataItem from './DataItem';
function DataList(props) {
  console.log(props);
  return (
    <ul>
      {props.data.map((post) => <DataItem key={post.id} clickLoadHandler={props.clickLoadHandler} >{post}</DataItem>)}
    </ul>
  )
}
export default DataList