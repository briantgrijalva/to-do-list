import { logoutFn } from "../../actions/auth"
import { useAppDispatch } from "../../store/store"

export const NavBar = () => {

  const dispatch = useAppDispatch()

  const handleLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(logoutFn())
  }

  return (
    <div className="container-nav">
      <button
        onClick={handleLogout}
        className='btn-confirm'
        style={{float: 'right'}}
      >
        Log Out
      </button>
    </div>
  )
}
