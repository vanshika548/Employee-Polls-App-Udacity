import { Fragment, useEffect } from "react";
import Login from "./components/Login";
import { handleInitialData } from "./actions/shared";
import { setAuthedUser } from "./actions/authedUser";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading-bar";
import { Routes, Route } from 'react-router-dom';
import DashboardPanel from "./components/DashboardPanel";
import Nav from "./components/Nav";

const App = (props) => {
  console.log("app",props)
  useEffect(() => {
      props.dispatch(handleInitialData());
  }, [])

  const logout = (e) => {
		e.preventDefault();

		props.dispatch(setAuthedUser(''));
	}
  
  return (
    <div>
      <Fragment>
        <div className="container">
          <LoadingBar/>
          <Nav currentUser={props.currentUser} logout={logout}/>
          {props.loading ? null : 
          <Routes>
            <Route exact path="login" element={<Login/>}/>
            <Route exact path="/" element={<DashboardPanel/>}/>
          </Routes>
          }
        </div>
      </Fragment>
    </div>
  );
};


const mapStateToProps = ({ authedUser,users }) => ({
	loading: JSON.stringify(users) === JSON.stringify({}),
  currentUser: users[authedUser],
	authedUser
})

export default connect(mapStateToProps)(App);