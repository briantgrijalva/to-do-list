import { useState } from "react";
import { taskToggleFn } from "../../actions/tasks";
import { useAppDispatch } from "../../store/store";

interface TaskProps {
  // taskCheckbox: taskCheckbox;
  // idFor: string;
  // htmlForId: string;
  tastkText: string;
  id: string;
}

// interface taskCheckbox {
//   // id: string;
//   // text: string;
//   // completed: boolean;
//   // idFor: string;
//   // htmlForId: string;
// }

export const Task = ({tastkText, id}: TaskProps) => {

  const [through, setThrough] = useState(false);
  const dispatch = useAppDispatch()
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      dispatch(taskToggleFn(e.target.id));
      setThrough(true);
    } else {
      dispatch(taskToggleFn(e.target.id))
      setThrough(false);
    }
  }

  return (
    <div className='container-task'>
       <input type="checkbox" id={id} className='checkbox-task' onChange={handleCheckboxChange}/>
      <p className='text-task' id={id} style={{textDecoration: through ? "line-through" : "none"}}>{tastkText}</p>
    </div>
  )
}
