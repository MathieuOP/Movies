/**
 * Npm import
 */
import { connect } from 'react-redux';
/**
 * Local import
 */
import Pagination from 'components/Pagination';

// Action Creators
import { pagination } from 'store/actions';
 
const mapStateToProps = state => ({
    startSlice: state.startSlice,
    endSlice: state.endSlice,
    moviesLength: state.moviesLength,
});

const mapDispatchToProps = dispatch => ({
    pagination: (currentButton) => (
        dispatch(pagination(currentButton))
    ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination);