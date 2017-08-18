import { connect } from 'react-redux';
import HistoryList from '@components/HistoryList';
import { compose, lifecycle } from 'recompose';
import * as actions from '@modules/history/actions';
import * as selectors from '@modules/history/selectors';
import { withRouter } from 'react-router';

const mapStateToProps = state => ({
  histories: selectors.getGemidoes(state),
  loading: selectors.isLoading(state),
  error: selectors.getError(state),
});

const mapDispatchToProps = (dispatch, { history }) => ({
  fetchGemidoes() {
    dispatch(actions.fetchGemidoes());
  },
  onClickCall(callId) {
    history.push({
      pathname: `/calls/${callId}`,
    });
  },
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.fetchGemidoes();
    },
  }),
)(HistoryList);
