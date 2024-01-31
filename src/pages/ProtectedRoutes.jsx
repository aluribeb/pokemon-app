import { useSelector } from "react-redux"
import { Outlet, Navigate } from "react-router-dom"
import './styles/protectedRoutes.css'
import Header from '../components-by-pages/HomePage/Header.jsx'

const ProtectedRoutes = () => {

    const trainer = useSelector(states => states.trainer)

    console.log(trainer)

    if (trainer.length >= 3) {

        return(        
        
        <div>
            <Header />
            <Outlet />
        </div>
        )

    } else {
        return (
            <Navigate to='/' />
        )
    }
}

export default ProtectedRoutes