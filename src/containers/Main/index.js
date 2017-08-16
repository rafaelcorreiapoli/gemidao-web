import { connect } from 'react-redux';
import Main from '@components/Main';

const mapStateToProps = state => ({
  userPicture: 'https://placehold.it/300x300',
  userName: 'Rafael Ribeiro Correia',
  gemidoesLeft: 199,

});
const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
