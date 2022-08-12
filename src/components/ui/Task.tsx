import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { taskRemoveFn, taskToggleFn, taskUpdateFn } from "../../actions/tasks";
import { useAppDispatch } from "../../store/store";

interface TaskProps {
  tastkText: string;
  id: string;
  allTasks: any;
}

export const Task = ({tastkText, id, allTasks}: TaskProps) => {

  const initialForm = {
    title: allTasks.title,
  }

  const [values, setValues] = useState(initialForm);

  const [through, setThrough] = useState(false || allTasks.completed);
  const [editing, setEditing] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setThrough(allTasks.completed);
  }, [setThrough, allTasks]);
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      console.log(e.target);
      setThrough(true);
      dispatch(taskToggleFn(allTasks, true));
    } else {
      setThrough(false);
      dispatch(taskToggleFn(allTasks, false));
    }
  }

  const handleRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const swalWithCutomButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn-confirm',
        cancelButton: 'btn-cancel'
      },
      buttonsStyling: false
    })
    
    swalWithCutomButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      iconColor: '#767777',
      background: '#E1E1E1',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(taskRemoveFn(allTasks));
        swalWithCutomButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithCutomButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }

  const handleEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setEditing(!editing);
  }

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [ e.target.name ]: e.target.value
    });
  }
  const { title } = values;

  const handleEditSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEditing(false);
    dispatch(taskUpdateFn({...allTasks, title}));
  }

  return (
    <div className='container-task' style={{backgroundColor: through ? '#b6cdd9' : '#F2F2F2'}}>
      <input type="checkbox" id={id} className='checkbox-task' checked={through} onChange={handleCheckboxChange}/>
      <div className="container-task-button">
        {
          editing ? (
            <form onSubmit={handleEditSubmit} style={{backgroundColor: 'transparent', width: '80%'}}>
              <input 
                type="text" 
                name="title" 
                className='input-task' 
                placeholder={tastkText}
                value={title}
                onChange={handleEditChange}
                maxLength={90}
              />
            </form>
            ) : (
            <p className='text-task' id={id} style={{width: '80%', textDecoration: through ? "line-through" : "none"}}>{tastkText}</p>
          )
        }
        <div>
          <span 
            className="material-symbols-outlined icon-edit"
            onClick={handleEdit}
            >
            edit
          </span>
          <span 
            className="material-symbols-outlined icon-delete"
            onClick={handleRemove}
          >
            delete
          </span>
        </div>
      </div>
    </div>
  )
}
