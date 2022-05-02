import React from 'react';


export default function DropDown({ id, idName }) {
  return (
    <div>
      Select a {idName}
      {/* this component should have a prop called setCastle, which is a function */}
      {/* on change, this component should use e.target.value to pass the correct id to the setCastle function */}
      {/* note that the options will need value properties (1, 2, or 3) that correspond to the photo filenames in the public directory */}
      <select onChange={e => id(e.target.value)}>
        <option value="1">{idName === 'Castle' && 'Serious' || idName === 'Skyline' && 'Pink' || idName === 'Waterfront' && 'Dock'}</option>
        <option value="2">{idName === 'Castle' && 'Mysterious' || idName === 'Skyline' && 'Busy' || idName === 'Waterfront' && 'Sunset'}</option>
        <option value="3">{idName === 'Castle' && 'Regal' || idName === 'Skyline' && 'Foggy' || idName === 'Waterfront' && 'Boats'}</option>
      </select>
    </div>
  );
}
