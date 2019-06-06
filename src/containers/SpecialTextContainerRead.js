import { connect } from 'react-redux';
import {setSpecialText} from "../actions/actions";
import SpecialTextBox from "../components/SpecialTextBox";


const mapDispatchToProps = {
   set:setSpecialText
  }


export default connect(null,mapDispatchToProps)(SpecialTextBox);
