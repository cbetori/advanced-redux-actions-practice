import React from 'react';

import CounterButton from "./containers/CounterContainerRead";
import Counter from "./containers/CounterContainer";

import SpecialTextBox from "./containers/SpecialTextContainerRead";
import SpecialText from "./containers/SpecialTextContainer";

import UserButtons from "./containers/UsersContainerRead";
import Users from "./containers/UsersContainer";
import SortUsers from "./containers/SortUsersContainerRead";

import Thermostat from "./containers/ThermostatContainer";
import ChangeTemperature from "./containers/ThermostatContainerRead";

import VideoPlayer from "./components/VideoPlayer";
import VideoTextBox from "./components/VideoTextBox";

import CurrentCity from "./containers/CurrentCityContainer";
import CityDropDown from "./containers/CurrentCityContainerRead";

import SearchTextBox from "./containers/SearchTextRead";

import ScaleVideo from "./components/ScaleVideo";

import Modal from "./components/Modal";
import ShowModal from "./components/ShowModal";

import store from './store'


function App() {
  //fetch call goes here
  // componentDidMount(){
  //   fetch("")
  //   .then(r=>r.json())
  //   .then (users=>{
  //     let message= {value:users, type:'USERS_LOADED'}
  //     store.dispatch(message)
  //   })
  // }

  return (
      <div className="App">
        <div className="container">
          <CounterButton />
          <br />
          <SpecialTextBox />
          <br />
          <UserButtons />
          <br />
          <CityDropDown />
           <br />
          <ChangeTemperature />
          <br />
          <SearchTextBox />
          <br />
          <VideoTextBox />
          <br />
          <SortUsers />
          <br />
          <ScaleVideo />
          <br />
          <ShowModal />
        </div>
        <div className="container">
          <Counter />
          <br />
          <SpecialText />
          <br />
          <CurrentCity />
          <br />
          <Thermostat />
          <br />
          <VideoPlayer />
          <br />
          

        </div>
        <div className="container">
          <Users />
        </div>
        <Modal />
      </div>
  );
}
export default App;