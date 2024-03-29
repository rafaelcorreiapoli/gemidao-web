import React from 'react';
import { string, bool, node, func, number, object } from 'prop-types';
import {
Link,
Redirect,
} from 'react-router-dom';
import CircularProgress from 'material-ui/CircularProgress';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import GemidaoCounter from '@components/GemidaoCounter';
import MenuItem from 'material-ui/MenuItem';
import Call from 'material-ui/svg-icons/communication/call';
import History from 'material-ui/svg-icons/action/history';
import PurchaseIcon from 'material-ui/svg-icons/action/shop';
import HowItWorks from 'material-ui/svg-icons/action/settings-applications';
import TermsOfUse from 'material-ui/svg-icons/action/assignment';
import Logout from 'material-ui/svg-icons/action/exit-to-app';
import styled from 'styled-components';
import GoogleAd from 'react-google-ad';

const UserPicture = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin: auto;
  margin-bottom: 20px;
`;

const UserName = styled.div`
  margin: auto;
  color: #FFF;
`;

const DrawerHeader = styled.div`
  margin-bottom: 20px;
  padding: 20px;
`;

const ChildrenWrapper = styled.div`
  max-width: 600px;
  margin: auto;
  padding: 10px;
`;

const StyledMenuItem = props => <MenuItem {...props} style={{ color: '#FFF' }} />;
const AuthenticatedLayout = ({
  children,
  logout,
  location,
  isAuthenticated,
  loading,
  gemidoesLeft,
  drawerOpen,
  setDrawerOpen,
  toggleDrawer,
  userName,
  userPicture,
}) => {
  if (loading) {
    return (
      <CircularProgress />
    );
  }
  return (
    <div style={{ height: '100%' }}>
      <AppBar
        title="Gemidão do Zap!"
        titleStyle={{ textAlign: 'center' }}
        iconElementRight={<GemidaoCounter gemidoesLeft={gemidoesLeft} />}
        onLeftIconButtonTouchTap={toggleDrawer}
      />
      <Drawer open={drawerOpen} docked={false} onRequestChange={setDrawerOpen} containerStyle={{ backgroundColor: '#27ae60' }}>
        <DrawerHeader>
          <UserPicture src={userPicture} />
          <UserName>{userName}</UserName>
        </DrawerHeader>
        <Link to={'/'} onClick={toggleDrawer}>
          <StyledMenuItem leftIcon={<Call color="#FFF" />} style={{ color: '#FFF' }}> Enviar Gemidões</StyledMenuItem>
        </Link>
        <Link to={'/purchase'} onClick={toggleDrawer}>
          <StyledMenuItem leftIcon={<PurchaseIcon color="#FFF" />}>Obter Gemidões</StyledMenuItem>
        </Link>
        <Link to={'/history'} onClick={toggleDrawer}>
          <StyledMenuItem leftIcon={<History color="#FFF" />}>Histórico</StyledMenuItem>
        </Link>
        <Link to={'/how-it-works'} onClick={toggleDrawer}>
          <StyledMenuItem leftIcon={<HowItWorks color="#FFF" />}>Como funciona?</StyledMenuItem>
        </Link>
        <Link to={'/terms-of-use'} onClick={toggleDrawer}>
          <StyledMenuItem leftIcon={<TermsOfUse color="#FFF" />}>Termos de uso</StyledMenuItem>
        </Link>
        <StyledMenuItem leftIcon={<Logout color="#FFF" />} onTouchTap={logout}>Sair</StyledMenuItem>
      </Drawer>
      {!isAuthenticated && <Redirect to={{
        pathname: '/login',
        state: { from: location },
      }}
      />}
      <ChildrenWrapper>
        {children}
      </ChildrenWrapper>
      <GoogleAd client="ca-pub-8243767661290035" slot="8790777674" format="auto" test="on" />
    </div>
  );
};


AuthenticatedLayout.propTypes = {
  children: node.isRequired,
  logout: func.isRequired,
  location: object.isRequired,
  isAuthenticated: bool.isRequired,
  loading: bool.isRequired,
  gemidoesLeft: number.isRequired,
  drawerOpen: bool.isRequired,
  setDrawerOpen: func.isRequired,
  toggleDrawer: func.isRequired,
  userName: string,
  userPicture: string,
};

AuthenticatedLayout.defaultProps = {
  userName: null,
  userPicture: null,
};
export default AuthenticatedLayout;
