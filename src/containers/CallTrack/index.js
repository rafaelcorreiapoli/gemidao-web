import CallStatus from '@components/CallStatus';
import { connect } from 'react-redux';
import * as selectors from '@modules/calls/selectors';
import { lifecycle, compose } from 'recompose';
import * as subscriptionsActions from '@modules/subscriptions/actions';
import hash from 'object-hash';
import * as subscriptionsSelectors from '@modules/subscriptions/selectors';

const mapStateToProps = (state, { callId }) => {
  const subsId = hash({ publication: 'singleCall', callId });
  console.log(subsId);
  console.log(subscriptionsSelectors.isLoading(state, subsId));
  return {
    status: selectors.getCallStatus(state, callId),
    loading: subscriptionsSelectors.isLoading(state, subsId),
    error: subscriptionsSelectors.isError(state, subsId),
    errorDescription: subscriptionsSelectors.getErrorDescription(state, subsId),
  };
};

const mapDispatchToProps = (dispatch, { callId }) => ({
  subscribe() {
    dispatch(subscriptionsActions.subscribe('singleCall', {
      callId,
    }));
  },
  unsubscribe() {
    dispatch(subscriptionsActions.unsubscribe('singleCall', {
      callId,
    }));
  },
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.subscribe('singleCall', {
        callId: this.props.callId,
      });
    },
    componentWillUnmount() {
      this.props.unsubscribe();
    },
  }),
)(CallStatus);
