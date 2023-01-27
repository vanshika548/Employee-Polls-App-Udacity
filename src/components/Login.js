import { useState } from "react";
import { connect } from "react-redux";
import '../App.css';
import { setAuthedUser } from "../actions/authedUser";
import { useNavigate } from "react-router-dom";
import history from "../history";

const Login = (props) => {
    const navigate = useNavigate();
    const { dispatch } = props;

    const [user,setUser] = useState('');

    const selectUser = (e) => {
        setUser(e);
    }

    const submit= (e) => {
        e.preventDefault();

        if (user) {
            dispatch(setAuthedUser(user));
            if (history.location.pathname !== '') {
                navigate(history.location.pathname);
            } else {
                navigate('/');
            }
        }
    }
    
    return (
        <div>
            <h2 className="heading">Login Form</h2>
            <form>

            <div className="container">
                <select onChange={(e)=>selectUser(e.target.value)}>
                    <option>Select Option</option>
                    {Object.keys(props.users).map((user)=>{
                        return(
                            <option
                            key={props.users[user].id}
                            value={props.users[user].id}
                            >
                                {props.users[user].name}
                            </option>
                        )
                    })}
                </select>
            </div>

            <div className="container" >
                <button type="submit" disabled={user === ''} className="cancelbtn" onClick={(e)=>submit(e)}>Submit</button>
            </div>
            </form>
        </div>
    )
}

const mapStateToProps = ({ users, authedUser }) => ({
    users,
    authedUser
})

export default connect(mapStateToProps)(Login);