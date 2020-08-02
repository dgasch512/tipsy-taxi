import { connect } from 'react-redux';
import Driver from '../components/admin/Driver';



const mapStateToProps = (state) => {
  return{
    driver: state.driver,
    rides: state.rides
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
      
  }
}

export default connect( mapStateToProps, mapDispatchToProps )(Driver)