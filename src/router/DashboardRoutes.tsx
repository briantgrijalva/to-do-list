import { Routes, Route} from "react-router-dom";
import { HomeScreen } from "../components/HomeScreen";
import { LoginScreen } from "../components/LoginScreen";



export const DashboardRoutes = () => {

    return (
        <>
         
            <div className="container-principal" >

                <Routes>
                    <Route path="login" element={<LoginScreen />} />
                    <Route path="home" element={<HomeScreen />} />
                  
                    <Route path="/*" element={<HomeScreen />} />
                </Routes>
            
            </div>

        </>
    )
}
