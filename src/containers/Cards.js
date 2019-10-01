/**
 * Npm import
 */
import { connect } from 'react-redux';
/**
 * Local import
 */
import Cards from '../components/Cards';

// Action Creators
import actions from '../store/actions';
import selectors from '../store/selectors';
 
const mapStateToProps = state => ({
    movies: selectors.selectedMovies(state).slice(state.startSlice, state.endSlice),
})

const mapDispatchToProps = dispatch => ({
    getMovies: () => (
        dispatch(actions.getMovies())
    )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cards);