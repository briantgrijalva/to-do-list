import { AnyAction } from 'redux'
import { types } from '../types/typesReducers'

interface TaskState {
    tasks: Array<Task>
}

export interface Task {
    id: string
    title: string
    completed: boolean
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
            
        default:
            return state;
    }
}