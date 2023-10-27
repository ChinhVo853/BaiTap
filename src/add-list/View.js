import {useDispatch,useSelector} from 'react-redux'
import { del } from '../reducers/task';
import { useRef } from 'react';


function View() {
    const TaskName = useRef();
    const danhsach = useSelector((state) => state.task.danhsach);
    const dispatch = useDispatch();
  
    const delTask = (name) => {
      dispatch(del(name));
    }
  console.log(danhsach);
    return (
      <>
        <div className="list-tasks">
          <h3 className="mb-5">List of tasks:</h3>
          {danhsach.map(function (task, idx) {
            return (
              <div className="task" key={idx}>{console.log(idx)}
                <p>{task}</p>
                <button onClick={() => delTask(task)}>X</button>
              </div>
            );
          })}
        </div>
      </>
    );
  }






export default View;