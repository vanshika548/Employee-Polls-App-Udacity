import { connect } from 'react-redux';
import { formatQuestion, formatDate } from '../utils/helpers';
import { useNavigate } from 'react-router-dom';

const QuestionPanel = (props) => {
    console.log("props qpanel",props)
    const navigate = useNavigate();

    const {avatar , name,timestamp,optionOne,optionTwo,hasReplied,id} = props.question;

    const onPoll = () => {
        if(hasReplied){
            navigate(`question/${id}/result`);
        }else{
            navigate(`question/${id}`)
        }
    }

    if (props.question === null) {
        return <p>This question doesn't exist.</p>
    }

    if ((props.questionTab === 'unanswered' && hasReplied) ||
        (props.questionTab === 'answered' && !hasReplied)) {
        return false;
    }
    
    return (
        <li>
        <img src={avatar}/>
        <div>
            <span>{name} asks would you rather...</span>
            <span>{formatDate(timestamp)}</span>
            <p>{optionOne && optionOne.text}</p>
            <span>OR</span>
            <p>{optionTwo && optionTwo.text}</p>
        </div>
        <button onClick={onPoll}>Poll</button>
        </li>
    )
}

const mapStateToProps = ({ authedUser, users, questions }, { id }) => {
    const question = questions[id];

    return {
        authedUser,
        question: question ? formatQuestion(question, users[question.author], authedUser) : null,
    }
}

export default connect(mapStateToProps)(QuestionPanel);