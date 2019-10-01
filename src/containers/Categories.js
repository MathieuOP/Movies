/**
 * Npm import
 */
import { connect } from 'react-redux';
/**
 * Local import
 */
import Categories from '../components/Categories';

const mapStateToProps = (state) => ({
  categoryMovies: state.categoryMovies,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);