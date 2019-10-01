/**
 * Npm import
 */
import { connect } from 'react-redux';
/**
 * Local import
 */
import Card from '../components/Card';

// Action Creators
import actions from '../store/actions';
 
const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
    deleteMovie: (id, category) => (
        dispatch(actions.deleteMovie(id, category))
    ),
    like: (id) => (
        dispatch(actions.like(id))
    ),
    dislike: (id) => (
        dispatch(actions.dislike(id))
    )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);