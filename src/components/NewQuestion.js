import { useState } from "react";
import {handleAddQuestion} from '../actions/questions';
import { useNavigate } from "react-router-dom";
import { connect } from 'react-redux';

const NewQuestion = (props) => {

    const[optionOneText,setOptionOneText] = useState('');
    const[optionTwoText,setOptionTwoText] = useState('');

    const navigate = useNavigate();

    const addFirstQuestion = (e) => {
        setOptionOneText(e.target.value.trim());
    }
    const addSecondQuestion = (e) => {
        setOptionTwoText(e.target.value.trim());
    }

    const onAddQestion = (e) => {
        e.preventDefault();
        props.dispatch(handleAddQuestion({optionOneText,optionTwoText}));
        navigate('/');
    }

    return (
        <div>
            <h1>Create New Poll / Add New Question</h1>
            <div>
                <h2>Woukd You Rather...?</h2>
                <input type='text' value={optionOneText} placeholder="Enter First Question" onChange={(e) => addFirstQuestion(e)}/>
                <input type='text' value={optionTwoText} placeholder="Enter Second Question" onChange={(e) => addSecondQuestion(e)}/>
                <button disabled={optionOneText === '' && optionTwoText === ''} type='button' onClick={(e) => onAddQestion(e)}>Add Question</button>
            </div>
        </div>
    )
}

export default connect()(NewQuestion);