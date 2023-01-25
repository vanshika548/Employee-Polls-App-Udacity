import { useEffect } from "react";
import Login from "./components/Login";
import { handleInitialData } from "./actions/shared";
import { connect } from "react-redux";

const App = (props) => {

  useEffect(() => {
    props.dispatch(handleInitialData());
  }, [])
  
  return (
    <div className="container">
      <Login/>
    </div>
  );
};


const mapStateToProps = ({authedUser, users}) => ({
	currentUser: users[authedUser],
	authedUser
})

export default connect(mapStateToProps)(App);