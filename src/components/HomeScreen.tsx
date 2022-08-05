import { useAppSelector } from '../store/store'
import { LeftSide } from './ui/LeftSide'
import { NavBar } from './ui/NavBar'
import { RightSide } from './ui/RightSide'
import { Task } from './ui/Task'
import { WriteTask } from './ui/WriteTask'

export const HomeScreen = () => {

  const task = useAppSelector(state => state.tasks.tasks)

  return (
    <div>
        <NavBar />
        <LeftSide />
        <div className='container-home'>
          <div style={{height: "76vh", overflowY: 'scroll'}}>
            {task.map((task) => <Task key={task.id} id={task.id} tastkText={task.title}/>)}
          </div>
          <div className='div-writetask' style={{height: "16vh", display: "table", margin: "0 auto", width: "100%"}}>
            <WriteTask />
          </div>
        </div>
        <RightSide />
    </div>
  )
}
