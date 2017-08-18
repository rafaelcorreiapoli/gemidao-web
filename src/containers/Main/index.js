import { connect } from 'react-redux';
import Main from '@components/Main';
import * as actions from '@modules/gemidao/actions';
import * as selectors from '@modules/gemidao/selectors';
import { withRouter } from 'react-router';
import * as callsActions from '@modules/calls/actions';
import * as authSelectors from '@modules/auth/selectors';

const mapStateToProps = state => ({
  sender: selectors.getSender(state),
  receiver: selectors.getReceiver(state),
  loading: selectors.isLoading(state),
  gemidoesLeft: authSelectors.getUserGemidoesLeft(state),
});
const mapDispatchToProps = (dispatch, { history }) => ({
  createGemidao(from, to) {
    dispatch(actions.createGemidao(from, to))
    .then((response) => {
      const callId = response.data._id;
      dispatch(callsActions.setCallStatus(callId, 'PREPARING'));
      history.push({
        pathname: `/calls/${callId}`,
      });
    });
  },
  goToPurchase() {
    history.push({
      pathname: '/purchase',
    });
  },
  setReceiver(number) {
    dispatch(actions.setReceiver(number));
  },
  setSender(number) {
    dispatch(actions.setSender(number));
  },
  shareOnFacebook() {
    FB.ui({
      method: 'share',
      url: 'https://www.gemidaodozap.com.br',
    });
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
