import { useSelector } from 'react-redux';
import Header from '../common/Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    const visibility = useSelector((state: any) => state.visibility)
    return (
        <>
            <div className={`${visibility ? "bg-black text-white" : ""} `}>
                <Header />
                <Outlet />
            </div>
        </>
    )
}

export default Layout