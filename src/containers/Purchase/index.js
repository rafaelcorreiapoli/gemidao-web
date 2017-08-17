/*  global PagSeguroLightbox FB */
import { connect } from 'react-redux';
import Purchase from '@components/Purchase';
import { lifecycle, compose } from 'recompose';
import gemidaoUrl from '@assets/images/gemidao.png';
import * as actions from '@modules/payments/actions';
import * as selectors from '@modules/payments/selectors';
import * as userSelectors from '@modules/auth/selectors';
import * as authActions from '@modules/auth/actions';

const uuidv4 = require('uuid/v4');

const SHARE_URL = 'https://appgemidaodozap.com.br';

const generateRandomUrl = () => `http://www.google.com.br/${uuidv4()}`;
const mapStateToProps = state => ({
  items: selectors.getItems(state),
  sharedTodayOnTwitter: userSelectors.hasSharedTodayOnTwitter(state),
  sharedTodayOnFacebook: userSelectors.hasSharedTodayOnFacebook(state),
});

const mapDispatchToProps = dispatch => ({
  purchaseItem(item) {
    dispatch(actions.fetchCheckoutUrl(item))
    .then((data) => {
      const url = data.url;
      const a = url.split('=');
      const code = a[1];
      PagSeguroLightbox({
        code,
      });
    });
  },
  fetchItems() {
    dispatch(actions.fetchItems());
  },
  shareOnFacebook() {
    const randomUrl = generateRandomUrl();
    FB.ui({
      method: 'share',
      href: randomUrl,
    }, () => {
      dispatch(actions.confirmFacebookShare(randomUrl))
      .then(() => {
        dispatch(authActions.fetchMe());
      });
    });
  },
});


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.fetchItems();
    },
  }),
)(Purchase);
