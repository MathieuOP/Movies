/**
 * Npm import
 */
import { connect } from 'react-redux';
/**
 * Local import
 */
import NumDisplayCard from 'components/NumDisplayCard';

// Action Creators
import { numberCardByPage } from 'store/actions';
 
const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
  numberCardByPage: (number) => (
    dispatch(numberCardByPage(number))
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NumDisplayCard);