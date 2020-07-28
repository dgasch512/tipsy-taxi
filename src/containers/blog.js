import { connect } from 'react-redux';
import Blog from '../components/Blog';
// import { removePlace } from '../redux/actions'


const mapStateToProps = (state) => {
  return{
    user: state.user,
    stories: state.stories
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
      
  }
}

export default connect( mapStateToProps, mapDispatchToProps )(Blog)