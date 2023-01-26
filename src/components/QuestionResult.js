import { connect } from "react-redux";
import { useParams } from "react-router-dom";

const QuestionResult = (props) => {

    let {id} = useParams();

    const resultObj = {
        avatar : props.users[props.questions[id].author].avatarURL,
        optionOne : props.questions[id].optionOne,
        optionTwo : props.questions[id].optionTwo,
        authorId : props.questions[id].author,
        authorName : props.users[props.questions[id].author].name,
        myVote : props.users[props.authedUser].answers[id],
        totalVotes : props.questions[id].optionOne.votes.length + props.questions[id].optionTwo.votes.length

    }
    console.log("props result",props)
    return (
        <div>
            <h1>QuestionResult</h1>
            <img src={resultObj.avatar}/>
            <div>
                <h2>Polling Result</h2>
                <h4>{resultObj.authorName} asked...</h4>
                <div>
                    <div><label>Would You Rather?</label></div>
                    <div>
                        <label>{resultObj.optionOne.votes.length} <strong>employees voted for:</strong></label>
                        <label>{resultObj.optionOne.text}</label>
                    </div>
                    <div>
                        <label>{resultObj.optionTwo.votes.length} <strong>employees voted for:</strong></label>
                        <label>{resultObj.optionTwo.text}</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({authedUser,users,questions}) => {
    return {
        authedUser,
        users,
        questions
    }
}

export default connect(mapStateToProps)(QuestionResult);