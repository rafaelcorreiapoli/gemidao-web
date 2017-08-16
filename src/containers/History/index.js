import { connect } from 'react-redux';
import HistoryList from '@components/HistoryList';
import { compose, lifecycle } from 'recompose';
import * as actions from '@modules/history/actions';
import * as selectors from '@modules/history/selectors';


const mapStateToProps = state => ({
  histories: selectors.getGemidoes(state),
  loading: selectors.isLoading(state),
  error: selectors.getError(state),
});

const mapDispatchToProps = dispatch => ({
  fetchGemidoes() {
    dispatch(actions.fetchGemidoes());
  },
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.fetchGemidoes();
    },
  }),
)(HistoryList);
