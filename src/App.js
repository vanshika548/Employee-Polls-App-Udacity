import { Fragment, useEffect } from "react";
import Login from "./components/Login";
import { handleInitialData } from "./actions/shared";
import { setAuthedUser } from "./actions/authedUser";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading-bar";
import { Routes, Route } from 'react-router-dom';
import DashboardPanel from "./components/DashboardPanel";
import ProtectedRoute from "./components/ProtectedRoute";
import NewQuestion from "./components/NewQuestion";
import QuestionForm from "./components/QuestionForm";
import QuestionResult from "./components/QuestionResult";
import Nav from "./components/Nav";
import Leaderboard from "./components/Leaderboard";

const App = (props) => {
  // console.log("app",props)
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
          <Nav currentUser={props.authedUser} logout={logout}/>
          {props.loading ? null : 
          <Routes>
            <Route exact path="login" element={<Login/>}/>
            <Route element={<ProtectedRoute user={props.authedUser}/>}>
                <Route exact path="/" element={<DashboardPanel/>}/>
                <Route exact path="/add" element={<NewQuestion/>}/>
                <Route exact path="question/:id" element={<QuestionForm/>}/>
                <Route exact path="question/:id/result" element={<QuestionResult/>}/>
                <Route exact path="/leaderboard" element={<Leaderboard/>}/>
            </Route>
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