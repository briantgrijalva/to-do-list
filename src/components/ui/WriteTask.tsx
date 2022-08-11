import React, { useRef, useState } from 'react';
import { taskAddFn } from '../../actions/tasks';
import { useAppDispatch } from '../../store/store';


export const WriteTask = () => {

  // The `state` arg is correctly typed as `RootState` already
  // const count = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()

  const [writing, setWriting] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const writeTask = (e:  React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    writing === false ? setWriting(true) : setWriting(false);
    inputRef.current && inputRef.current.focus();
  }

  const initialState = {
    title: ''
  }

  const [values, setValues] = useState(initialState);

  const { title } = values;

  const reset = () => {
      setValues( initialState );
  }


  const handleInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      setValues({
          ...values,
          [ target.name ]: target.value
      });

  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit');
    setWriting(false);
    dispatch(taskAddFn({
      title: title,
      completed: false,
      author: '62f2c0431177b8d7f9ddc235'
    }));
    reset();
  }
  
  

  // return [ values, handleInputChange, reset ];

  return (
    <div className='container-write-task'>
      {writing === false ? (
      <span className="material-symbols-outlined icon-add" onClick={writeTask}>
        add
      </span>
      ) : (
        <span className="material-symbols-outlined icon-add" onClick={writeTask}>
          arrow_forward_ios
        </span>
      )}
      <form style={{backgroundColor: 'transparent', width: '100%'}} onSubmit={handleSubmit}>
        <input 
          value={title} 
          name="title"
          type="text" 
          className='input-write-task' 
          ref={inputRef} 
          onFocus={() => {setWriting(true)}} 
          onBlur={() => {setWriting(false)}}
          onChange={handleInputChange}
        />
      </form>
      {/* //todo: mostrar un placeholder con el boton de enter */}
    </div>
  )
}
