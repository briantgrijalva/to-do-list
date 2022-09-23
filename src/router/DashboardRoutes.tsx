import { Routes, Route} from "react-router-dom";
import { StatScreen } from "../modules/stats/screens/StatScreen";
import { HomeScreen } from "../modules/tasks/screens/HomeScreen";
import { LeftSide } from "../ui/LeftSide";
import { LoginScreen } from "../ui/LoginScreen";
import { NavBar } from "../ui/NavBar";
import { RightSide } from "../ui/RightSide";



export const DashboardRoutes = () => {

    return (
        <>
            <NavBar />
            <LeftSide />
            <div className='container-home'>
                <div className="container-principal" >
                    <Routes>
                        <Route path="login" element={<LoginScreen />} />
                        <Route path="home" element={<HomeScreen />} />
                        <Route path="stats" element={<StatScreen />} />
                    
                        <Route path="/*" element={<HomeScreen />} />
                    </Routes>
                </div>    
            </div>
            <RightSide />
        </>
    )
}
