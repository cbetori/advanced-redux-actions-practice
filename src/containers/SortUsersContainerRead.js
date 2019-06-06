import SortUsers from '../components/SortUsers'
import { connect } from 'react-redux';
import { setCurrentUserSort } from '../actions/actions';


const mapDispatchToProps = {
    set: setCurrentUserSort
  }
  
  export default connect(null, mapDispatchToProps)(SortUsers);