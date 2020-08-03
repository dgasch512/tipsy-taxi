import { connect } from 'react-redux';
import Login from '../components/Login';
import { profile } from '../redux/actions';


const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
      profile: (user) => dispatch(profile(user))
  }
}

export default connect( mapStateToProps, mapDispatchToProps )(Login)