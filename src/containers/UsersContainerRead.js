import UserButtons from '../components/UserButtons'
import { connect } from 'react-redux';
import { addUser } from '../actions/actions';
import { removeUser } from '../actions/actions';
import { setSearchText } from '../actions/actions';

const mapDispatchToProps = {
    add: addUser,
    remove: removeUser,
    users: setSearchText
  }
  
  export default connect(null, mapDispatchToProps)(UserButtons);