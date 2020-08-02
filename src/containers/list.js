import { connect } from 'react-redux';
import List from '../components/admin/List';
import { removeRider } from '../redux/actions';


const mapStateToProps = (state) => {
  return{
    drivers: state.drivers,
    rides: state.rides
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
      removeRider: (id) => dispatch(removeRider(id))
  }
}

export default connect( mapStateToProps, mapDispatchToProps )(List)