/**
 * Npm import
 */
import { connect } from 'react-redux';
/**
 * Local import
 */
import Cards from 'components/Cards';

// Selectors
import { selectedMovies } from 'store/selectors';
 
const mapStateToProps = state => ({
    movies: selectedMovies(state).slice(state.startSlice, state.endSlice),
})

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cards);