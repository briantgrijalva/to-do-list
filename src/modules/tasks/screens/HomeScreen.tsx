import { useEffect } from 'react'
import { startLoading } from '../actions/tasks'
import { useAppDispatch, useAppSelector } from '../../../store/store'
// import { LeftSide } from './LeftSide'
// import { NavBar } from './NavBar'
// import { RightSide } from './RightSide'
import { Task } from '../components/Task'
import { WriteTask } from '../components/WriteTask'

export const HomeScreen = () => {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(startLoading())
  }, [dispatch])
  

  const task = useAppSelector(state => state.tasks.tasks)

  return (
    <div>
        {/* <NavBar />
        <LeftSide /> */}
        {/* <div className='container-home'> */}
          <div style={{height: "76vh", overflowY: 'scroll'}}>
            {task.map((task) => <Task key={task.id} id={task.id} tastkText={task.title} allTasks={task}/>)}
          </div>
          <div className='div-writetask' style={{height: "16vh", display: "table", margin: "0 auto", width: "100%"}}>
            <WriteTask />
          </div>
        {/* </div> */}
        {/* <RightSide /> */}
    </div>
  )
}
