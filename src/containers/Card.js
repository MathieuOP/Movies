/**
 * Npm import
 */
import { connect } from 'react-redux';
/**
 * Local import
 */
import Card from 'components/Card';

// Action Creators
import { deleteMovie, like, dislike } from '../store/actions';
 
const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
    deleteMovie: (id, category) => (
        dispatch(deleteMovie(id, category))
    ),
    like: (id) => (
        dispatch(like(id))
    ),
    dislike: (id) => (
        dispatch(dislike(id))
    )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);