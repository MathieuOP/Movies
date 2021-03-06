/**
 * Npm import
 */
import { connect } from 'react-redux';
/**
 * Local import
 */
import Category from 'components/Category';

// Action Creators
import { filterMovies } from 'store/actions';
 
const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
  filterMovies: (category) => (
    dispatch(filterMovies(category))
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Category);