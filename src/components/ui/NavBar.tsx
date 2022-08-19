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
      {/* <button>
        <img src={logo} alt="logo" />
      </button> */}
      <button
        onClick={handleLogout}
      >
        Log Out
      </button>
    </div>
  )
}
