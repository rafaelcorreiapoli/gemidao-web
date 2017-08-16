import { connect } from 'react-redux';
import HistoryList from '@components/HistoryList';


const fakeHistories = [{
  from: '+5511943433330',
  to: '+5511991446936',
  date: new Date(),
  answered: true,
}, {
  from: '+5511943433330',
  to: '+5511991446936',
  date: new Date(),
  answered: false,
}];

const mapStateToProps = state => ({
  histories: fakeHistories,
});

export default connect(mapStateToProps)(HistoryList);
