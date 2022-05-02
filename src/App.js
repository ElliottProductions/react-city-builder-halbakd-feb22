import { useState } from 'react';
import './App.css';
import SkylineDropdown from './SkylineDropdown';
import WaterfrontDropdown from './WaterfrontDropdown';
import CastleDropdown from './CastleDropdown';
import SloganList from './SloganList';
import SloganForm from './SloganForm';
import CityNameInput from './CityNameInput';
import City from './City';

function App() {
  // track some state here.
  const [skylineId, setSkyLineId] = useState(1);
  const [waterfrontId, setWaterFrontId] = useState(1);
  const [castleId, setCastleId] = useState(1);

  const [cityName, setCityName] = useState('Boston');
  const [sloganArr, setSloganArr] = useState(['The City of Excellence']);



  // You'll need to keep track of a skylineId, waterfrontId, and castleId. All these start out as 1
  // you'll need to track a city name, which starts as the city name of your choice.
  // finally, you'll need an array of slogans, which could start out as ['The City of Excellence'] for example

  return (
    <div className="App">
      {/* here, the City component takes in skylineId, waterfrontId, castleId as props. It'll use those ids to render pictures correctly. */}
      <City skylineId={skylineId} waterfrontId={waterfrontId} castleId={castleId}/>
      <h1>
        {/* dynamically update the city name here using state */}
        
        Welcome to beautiful {cityName}!
      </h1>
      <div className='bottom'>
        {/* here, the CityNameInput component takes in the setCityName state handler function */}
        <CityNameInput setCityName={setCityName}/>
        <section className='dropdowns'>
          {/* 
          render all three Dropdown components (WaterfrontDropdown, SkylineDropdown, CastleDropdown) here. 
          
          In each Dropdown, pass as props the state handler functions defined above, so that these child components can manipulate parent state 
          */}
          <img width={200} src={`${waterfrontId}.jpeg`}/>
          <img width={200} src={`${castleId}.jpeg`}/>
          <img width={200} src={`${skylineId}.jpeg`}/>
          <WaterfrontDropdown setWaterFrontId={setWaterFrontId}/>
          <CastleDropdown setCastleId={setCastleId}/>
          <SkylineDropdown setSkyLineId={setSkyLineId}/>

        </section>
        {/* here, the SloganForm component takes in the setSlogans state handler function and the slogans array that live in state */}
        <SloganForm setSloganArr={setSloganArr} sloganArr={sloganArr}/>
        {/* here, the SloganList component takes the array of slogans that lives in state */}
        <SloganList sloganArr={sloganArr}/>

      </div>
    </div>
  );
}

export default App;
