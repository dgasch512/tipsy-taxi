import { connect } from 'react-redux';
import Request from '../components/Request';
import { newRequest } from '../redux/actions';

const mapStateToProps = state => {
  return {
    rides: state.rides,
    location: state.requestLocation.robots,
    isPending: state.requestLocation.isPending,
    error: state.requestLocation.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    newRequest: (request) => dispatch(newRequest(request))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Request);