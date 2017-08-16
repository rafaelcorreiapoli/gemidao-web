import { connect } from 'react-redux';
import Main from '@components/Main';
import * as actions from '@modules/gemidao/actions';
import * as selectors from '@modules/gemidao/selectors';

const mapStateToProps = state => ({
  sender: selectors.getSender(state),
  receiver: selectors.getReceiver(state),
  loading: selectors.isLoading(state),
});
const mapDispatchToProps = dispatch => ({
  createGemidao(from, to) {
    dispatch(actions.createGemidao(from, to));
  },
  setReceiver(number) {
    dispatch(actions.setReceiver(number));
  },
  setSender(number) {
    dispatch(actions.setSender(number));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
