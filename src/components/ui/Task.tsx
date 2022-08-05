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

  const dispatch = useAppDispatch()
  console.log(id);
  
  

  return (
    <div className='container-task'>
       <input type="checkbox" id={id} className='checkbox-task' onChange={ 
        (e) => {if (e.target.checked) {console.log('checked'); dispatch(taskToggleFn(e.target.id))} else {console.log('unchecked'); dispatch(taskToggleFn(e.target.id))
        
       }} }/>
      <p className='text-task'>{tastkText}</p>
    </div>
  )
}
