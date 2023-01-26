import { connect } from "react-redux";
import User from "./User";

const Leaderboard = (props) => {

    const usersData = (users) => {
        const data = Object.keys(users).map(function (key){
            return {
                id: key,
                name: users[key].name,
                totalScore: Object.keys(users[key].answers).length + users[key].questions.length,
                answerCount: Object.keys(users[key].answers).length,
                questionCount: users[key].questions.length,
                avatar: users[key].avatarURL
            }
        })

        return arrangeData(data);
    }

    const arrangeData = (data) => {
        const sortedData = data.sort(
            (a,b) => b.totalScore - a.totalScore
        )
        return sortedData;
    }

    return (
        <div>
            <h1 className="leaderboard">Leaderboard</h1>
            <ul className="user-list">
                {
                    usersData(props.users).map((user) => (
                        <User key={user.id} user={user}/>
                    ))
                }
            </ul>
        </div>
    )
}

const mapStateToProps = ({users}) => ({
    users
})

export default connect(mapStateToProps)(Leaderboard);