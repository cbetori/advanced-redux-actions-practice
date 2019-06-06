import CounterButton from '../components/CounterButton'
import { connect } from 'react-redux';
import { increaseCounter } from '../actions/actions';
import { decreaseCounter } from '../actions/actions';

const mapDispatchToProps = {
    increase: increaseCounter,
    decrease: decreaseCounter
  }
  
  export default connect(null, mapDispatchToProps)(CounterButton);