import { useState } from "react";
import { connect } from "react-redux";
import QuestionPanel from "./QuestionPanel";

const DashboardPanel = (props) => {
    const [questionTab,setQuestionTab] = useState('unanswered');

    const handleQuestionTab = (e) => {
        e.preventDefault();
        const tab = questionTab === 'answered' ? 'unanswered' : 'answered';
        setQuestionTab(tab);
    }
    return (
        <div>
            <div className="heading-flex">
                <h1 className="answered-heading">
                    {questionTab === 'answered' ? 'Answered Questions' : 'Unanswered Questions'}
                </h1>
                <button className="tab" onClick={(e) => handleQuestionTab(e)}>
                    {questionTab === 'answered' ? 'Show Unanswered Questions' : 'Show Answered Questions'}
                </button>
            </div>
            <ul>
                {props.questionIds.map((id) => (
                    <QuestionPanel key={id} id={id} questionTab={questionTab}/>
                ))}
            </ul>
        </div>
    )
}

const mapStateToProps = ({questions}) => ({
    questionIds: Object.keys(questions).sort(
        (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
})

export default connect(mapStateToProps)(DashboardPanel);