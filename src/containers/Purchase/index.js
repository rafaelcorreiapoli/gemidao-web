import { connect } from 'react-redux';
import Purchase from '@components/Purchase';
import gemidaoUrl from '@assets/images/gemidao.png';

const fakeItems = [{
  _id: '1gemidao',
  imageUrl: gemidaoUrl,
  description: '1 Gemidão',
  amount: 3.99,
  quantity: 1,
}, {
  _id: '10gemidao',
  imageUrl: gemidaoUrl,
  description: '10 Gemidões',
  amount: 13.99,
  quantity: 1,
}, {
  _id: '20gemidao',
  imageUrl: gemidaoUrl,
  description: '20 Gemidões',
  amount: 17.99,
  quantity: 1,
}];

const mapStateToProps = state => ({
  items: fakeItems,
});

const mapDispatchToProps = dispatch => ({
  purchaseItem(item) {
    console.log(`purchase ${item.toString()}`);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Purchase);
