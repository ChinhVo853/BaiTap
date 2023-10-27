import {useDispatch} from 'react-redux'
import { add } from '../reducers/task';
import { useRef } from 'react';

function Add()
{
    const TaskName = useRef();
    const dispatch = useDispatch();

    const addTask = () =>
    {
        dispatch(add(TaskName.current.value));
    }

    return (<>
    <input type="text" ref={TaskName}/>
    <button onClick={addTask}>Add</button>
    </>)
}
export default Add;