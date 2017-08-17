/*  global PagSeguroLightbox FB */
import { connect } from 'react-redux';
import Purchase from '@components/Purchase';
import { lifecycle, compose } from 'recompose';
import gemidaoUrl from '@assets/images/gemidao.png';
import * as actions from '@modules/payments/actions';
import * as selectors from '@modules/payments/selectors';
import * as userSelectors from '@modules/auth/selectors';
import * as authActions from '@modules/auth/actions';


const mapStateToProps = state => ({
  items: selectors.getItems(state),
  sharedTodayOnTwitter: userSelectors.hasSharedTodayOnTwitter(state),
  sharedTodayOnFacebook: userSelectors.hasSharedTodayOnFacebook(state),
  loadingConfirmFacebookShare: selectors.isLoadingConfirmFacebookShare(state),
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
    dispatch(actions.shareOnFacebookForReward());
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
