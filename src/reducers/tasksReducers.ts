import { AnyAction } from 'redux'
import { types } from '../types/typesReducers'

interface TaskState {
    tasks: Array<ITask>
}

export interface ITask {
    title: string
    completed: boolean
    author: string
    id?: string
}

const initialState: TaskState = {
    tasks: []
}

export const tasksReducer = (state = initialState, action: AnyAction) => {
    
    switch (action.type) {
        
        case types.taskAdd:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        case types.taskToggle: 
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    console.log(task.id, action.payload);
                    
                    if (task.id === action.payload) {
                        return {
                            ...task,
                            completed: !task.completed
                        }
                    }
                    return task
                }
                )
            }
        // case types.taskToggle:
        //     return {
        //         ...state,
        //         tasks: state.tasks.map(
        //             t => (t.id === action.payload.id) ? action.payload : t 
        //         )
        //     }
        case types.taskRemove:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            }
        case types.taskLoad: {
            return {
                ...state,
                tasks: [...action.payload]
            }
        }
            
        default:
            return state;
    }
}