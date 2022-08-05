import { AnyAction } from 'redux'
// import { sendMessage } from './store/chat/actions'
import { ThunkAction } from 'redux-thunk'
import { Task } from '../reducers/tasksReducers'
import { RootState } from '../store/store'
import { types } from '../types/typesReducers'

export const taskAddFn =(task: Task): ThunkAction<void, RootState, unknown, AnyAction> =>
  async dispatch => {
    // const asyncResp = await exampleAPI()
    // dispatch(
    //   sendMessage({
    //     message,
    //     user: asyncResp,
    //     timestamp: new Date().getTime()
    //   })
    // )
    dispatch(taskAdd(task))
  }

const taskAdd = (task: Task) =>({
    type: types.taskAdd,
    payload: task
});

export const taskToggleFn = (id: string): ThunkAction<void, RootState, unknown, AnyAction> =>
  async dispatch => {
    // const asyncResp = await exampleAPI()
    // dispatch(
    //   sendMessage({
    //     message,
    //     user: asyncResp,
    //     timestamp: new Date().getTime()
    //   })
    // )
    dispatch(taskToggle(id))
  }

const taskToggle = (id: string) => ({
    type: types.taskToggle,
    payload: id
})