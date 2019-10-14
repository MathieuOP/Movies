/**
 * Npm import
 */
import { connect } from 'react-redux';
/**
 * Local import
 */
import App from 'components/App';

// Action Creators
import { getMovies } from 'store/actions';
 
const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
  getMovies: (movies, categoriesMovies) => (
    dispatch(getMovies(movies, categoriesMovies))
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);