import { connect } from 'react-redux';
import { formatQuestion, formatDate } from '../utils/helpers';
import { useNavigate } from 'react-router-dom';

const QuestionPanel = (props) => {
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
        <li className='d-row'>
        <img src={avatar} className="image" alt={avatar === null ? '' : `Avatar of ${name}`} />
        <div className='question-panel-info'>
            <div className='d-flex'>
                <span><strong>{name}</strong> asks would you rather...</span>
                <span className='date'>{formatDate(timestamp)}</span>
            </div>
            <p>{optionOne && optionOne.text}</p>
            <span><strong>OR</strong></span>
            <p>{optionTwo && optionTwo.text}</p>
        </div>
        <button className='pollBtn' onClick={onPoll}>Poll</button>
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