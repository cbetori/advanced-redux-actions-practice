import Thermostat  from "../components/Thermostat";
import { connect } from 'react-redux';

//map a prop called text to the state specialText
function mapStateToProps(state){
  return {
    temp: state.thermostat
  }
}

export default connect(mapStateToProps)(Thermostat);