import { useEffect, useState } from "react";
import { taskRemoveFn, taskToggleFn } from "../../actions/tasks";
import { useAppDispatch } from "../../store/store";

interface TaskProps {
  // taskCheckbox: taskCheckbox;
  // idFor: string;
  // htmlForId: string;
  tastkText: string;
  id: string;
  allTasks: any;
}

// interface taskCheckbox {
//   // id: string;
//   // text: string;
//   // completed: boolean;
//   // idFor: string;
//   // htmlForId: string;
// }

export const Task = ({tastkText, id, allTasks}: TaskProps) => {

  const [through, setThrough] = useState(false || allTasks.completed);
  const dispatch = useAppDispatch();

  useEffect(() => {

    setThrough(allTasks.completed);

  }, [setThrough, allTasks]);
  
  
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      console.log(e.target);
      setThrough(true);
      // console.log(allTasks);
      dispatch(taskToggleFn(allTasks, true));
    } else {
      // dispatch(taskToggleFn(e.target.id))
      setThrough(false);
      dispatch(taskToggleFn(allTasks, false));
    }
  }

  const handleRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(taskRemoveFn(allTasks));
  }

  return (
    <div className='container-task' style={{backgroundColor: through ? '#b6cdd9' : '#F2F2F2'}}>
      <input type="checkbox" id={id} className='checkbox-task' checked={through} onChange={handleCheckboxChange}/>
      <div className="container-task-button">
        <p className='text-task' id={id} style={{textDecoration: through ? "line-through" : "none"}}>{tastkText}</p>
        <span 
          className="material-symbols-outlined icon-delete"
          onClick={handleRemove}
        >
          delete
        </span>
      </div>
    </div>
  )
}
