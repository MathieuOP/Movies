/**
 * Npm import
 */
import { connect } from 'react-redux';
/**
 * Local import
 */
import NumDisplayCard from '../components/NumDisplayCard';

// Action Creators
import actions from '../store/actions';
 
const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
  numberCardByPage: (number) => (
    dispatch(actions.numberCardByPage(number))
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NumDisplayCard);