import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { RouteProps } from 'react-router';

interface Props extends RouteProps {
  loggedIn: string;
}

class AuthRoute extends Route<Props> {
  
}

function mapStateToProps(state: any) {
  return {
    loggedIn: state.session.isAuthenticated,
  };
}

export default withRouter(connect(mapStateToProps)(AuthRoute));
