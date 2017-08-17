import gemidaoUrl from '@assets/images/gemidao.png';

export const getItems = state => state.payments.items
? state.payments.items.map(item => ({
  ...item,
  _id: item.id,
  imageUrl: gemidaoUrl,
}))
: [];


export const isLoadingConfirmFacebookShare = state => state.payments.loadingConfirmFacebookShare;
