import React from 'react';

export default function City({ waterfrontId, castleId, skylineId }) {
  return (
    <div className="city">
      <img src={`waterfront-${waterfrontId}.jpeg`}/>
      <img src={`castle-${castleId}.jpeg`}/>
      <img src={`skyline-${skylineId}.jpeg`}/>
      {/* this component should take 3 props: waterfrontId, skylineId, and castlId */}
      {/* use these 3 ids in img tags load approriate images that live in the public directory */}
    </div>
  );
}
