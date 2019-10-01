/**
 * Npm import
 */
import { connect } from 'react-redux';
/**
 * Local import
 */
import Category from '../components/Category';

// Action Creators
import actions from '../store/actions';
 
const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
  filterMovies: (category) => (
    dispatch(actions.filterMovies(category))
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Category);