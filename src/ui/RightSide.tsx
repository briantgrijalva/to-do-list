import { useNavigate } from "react-router-dom"

export const RightSide = () => {

    const navigate = useNavigate();

    const navigateToStats = () => {
        console.log('navigate');
        
        navigate("/stats");
    }

  return (
    <div className='container-rightside'>
        <button onClick={navigateToStats}>
            stats
        </button>
    </div>
  )
}
