import { Routes, Route} from "react-router-dom";
import { HomeScreen } from "../components/HomeScreen";
import { LoginScreen } from "../components/LoginScreen";



export const DashboardRoutes = () => {


    return (
        <>
            {/* <Julon /> */}

            {/* El sidebar contiene las routes */}
            {/* <Sidebar /> */}
            
            <div className="container-principal" >

                <Routes>
                    <Route path="/" element={<HomeScreen />} />
                    <Route path="login" element={<LoginScreen />} />
                    {/* <Route path="login" element={<LoginScreen />} />
                    <Route path="dashboard" element={<DashboardScreen />} />
                    <Route path="ventas" element={<VentasScreen />} />
                    <Route path="verventa" element={<ViewVenta />} />
                    <Route path="sucursales" element={<SucursalesScreen />} />
                    <Route path="nuevaSucursal" element={<AgregarSucursal />} />
                    <Route path="verSucursal" element={<ViewSucursal />} />
                    <Route path="personas" element={<PersonasScreen />} />
                    <Route path="nuevoUsuario" element={<AgregarUsuarioScreen />} />
                    <Route path="nuevoProveedor" element={<AgregarProveedoresScreen />} />
                    <Route path="nuevoCliente" element={<AgregarClientesScreen />} />
                    <Route path="productos" element={<ProductosScreen />} />
                    <Route path="nuevoProducto" element={<AgregarProducto />} />
                    <Route path="verProducto" element={<ViewProducto />} />
                    
                    
                    <Route path="/*" element={<DashboardScreen />} /> */}
                    <Route path="*" element={<HomeScreen />} />
                </Routes>
            
            </div>


        </>
    )
}
