import { connect } from 'react-redux';
import {setCity} from "../actions/actions";
import CityDropDown from "../components/CityDropDown";


const mapDispatchToProps = {
   set:setCity
  }


export default connect(null,mapDispatchToProps)(CityDropDown);