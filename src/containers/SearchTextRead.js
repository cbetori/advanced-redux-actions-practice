import SearchTextBox from '../components/SearchTextBox'
import { connect } from 'react-redux';
import { setSearchText } from '../actions/actions';


const mapDispatchToProps = {
    set: setSearchText
  }
  
  export default connect(null, mapDispatchToProps)(SearchTextBox);