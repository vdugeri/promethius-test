import React from 'react';

export let Countries = ({ match, countries }) => {
  console.log(match.params.name);
  return (
    <div>Countries</div>
  )
}
