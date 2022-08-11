import { AnyAction } from 'redux'
// import { sendMessage } from './store/chat/actions'
import { ThunkAction } from 'redux-thunk'
import { ITask } from '../reducers/tasksReducers'
import { RootState } from '../store/store'
import { types } from '../types/typesReducers'
import { fetchSinToken } from '../utils/fetch'

export const taskAddFn = (task: ITask): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    const resp = await fetchSinToken(`${process.env.REACT_APP_CREATE_TASK_ENPOINT}`, task, 'POST');
    const body = await resp.json();
    console.log(body);
    if (body.success) {
      dispatch(taskAdd(body.data));
      console.log('taskAddFn');
      
    } else {
      console.log(body.message);
    }

    // const asyncResp = await exampleAPI()
    // dispatch(
    //   sendMessage({
    //     message,
    //     user: asyncResp,
    //     timestamp: new Date().getTime()
    //   })
    // )
    // dispatch(taskAdd(task))
  }
}
const taskAdd = (task: ITask) =>({
    type: types.taskAdd,
    payload: task
});

export const taskToggleFn = (task: ITask, completed: boolean): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    // const asyncResp = await exampleAPI()
    // dispatch(
    //   sendMessage({
    //     message,
    //     user: asyncResp,
    //     timestamp: new Date().getTime()
    //   })
    // )
    try {
      console.log(task);
      
      console.log(`${process.env.REACT_APP_UPDATE_TASK_ENPOINT}/${task.id}`);
      const task2 = {...task, completed: completed, id: undefined, updatedAt: undefined, createdAt: undefined};
      
      const resp = await fetchSinToken(`${process.env.REACT_APP_UPDATE_TASK_ENPOINT}/${task.id}`, task2, 'PUT');
      console.log(resp);
      
      const body = await resp.json();
      console.log(body);
      if (body.success) {
        dispatch(taskToggle(task));
        console.log('taskToggleFn');
      }
    } catch (error) {
      console.log(error);
    }
    // dispatch(taskToggle(id))
  }
}
const taskToggle = (task: ITask) => ({
  type: types.taskToggle,
  payload: task
});

export const taskRemoveFn = (task: ITask): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    try {
      const resp = await fetchSinToken(`${process.env.REACT_APP_DELETE_TASK_ENPOINT}/${task.id}`, {}, 'DELETE');
      const body = await resp.json();
      if (body.success) {
        // todo: mostrar un mensaje de confirmación
        dispatch(removeTask(task.id));
      }
    } catch (error) {
      console.log(error);  
    }
  }
}

const removeTask = (id: string | undefined) => ({
  type: types.taskRemove,
  payload: id
})

export const startLoading = (): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async(dispatch) => {

      try {
          const resp = await fetchSinToken(`${process.env.REACT_APP_GET_TASKS_ENPOINT}`, {}, 'GET');
          const body = await resp.json();
          const task = body.data;

          dispatch(loadedTask(task));
      } catch (error) {
          console.log(error);
      }

  }
}

const loadedTask = (task: ITask) => ({
  type: types.taskLoad,
  payload: task
});