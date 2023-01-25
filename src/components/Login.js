import { connect } from "react-redux";
import '../App.css';

const Login = (props) => {

    return (
        <div>
            <h2 className="heading">Login Form</h2>
            <form>
            <div className="imgcontainer">
                <img src='../assets/images/avatar.png' alt="Avatar" className="avatar"/>
            </div>

            <div className="container">
                <select>
                    <option>Select Option</option>
                </select>
            </div>

            <div className="container" >
                <button type="submit" className="cancelbtn">Submit</button>
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