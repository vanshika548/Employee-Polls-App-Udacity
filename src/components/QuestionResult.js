import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import { useEffect,useState } from "react";

const QuestionResult = (props) => {

    let {id} = useParams();
    const [continueRendering, setContinueRendering] = useState(false);

    useEffect(() => {
        if (props.questions[id]) {
            setContinueRendering(true)
        }
    }, [])

    if (!continueRendering) {
        return <PageNotFound />
    }

    const calculatePercentage = (count, totalCount) => {
        if (totalCount !== 0) {
            return Math.round((count / totalCount) * 100);
        }
        return 'NA';
    }

    const resultObj = {
        avatar : props.users[props.questions[id].author].avatarURL,
        optionOne : props.questions[id].optionOne,
        optionTwo : props.questions[id].optionTwo,
        authorId : props.questions[id].author,
        authorName : props.users[props.questions[id].author].name,
        myVote : props.users[props.authedUser].answers[id],
        totalVotes : props.questions[id].optionOne.votes.length + props.questions[id].optionTwo.votes.length

    }
    return (
        <div>
            <h1 className="questiionResult">QuestionResult</h1>
            <div className="ques-res">
            <div className="result">
                <img src={resultObj.avatar} className='image'/>
                <h4 className="author">{resultObj.authorName} asked...</h4>
            </div>
                <div className="result-info">
                    <div><label>Would You Rather?</label></div>
                    <div className="poll-result">
                        <label><strong>{resultObj.optionOne.votes.length} {`(`}{calculatePercentage(resultObj.optionOne.votes.length, resultObj.totalVotes)}{`%)`} </strong> employees voted for:</label>
                        <label><strong>{resultObj.optionOne.text}</strong></label>
                        <br/>
                        {resultObj.myVote === 'optionOne' ?
                            <strong className="your-vote">***YOUR VOTE***</strong> : null
                        }
                    </div>
                    <div className="poll-result">
                        <label><strong>{resultObj.optionTwo.votes.length} {`(`}{calculatePercentage(resultObj.optionTwo.votes.length, resultObj.totalVotes)}{`%)`} </strong> employees voted for:</label>
                        <label><strong>{resultObj.optionTwo.text}</strong></label>
                        <br/>
                        {resultObj.myVote === 'optionTwo' ?
                            <strong className="your-vote">***YOUR VOTE***</strong> : null
                        }
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