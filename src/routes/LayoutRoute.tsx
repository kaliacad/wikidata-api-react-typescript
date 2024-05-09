import { Outlet } from 'react-router-dom';
import Aside from '../components/Aside';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WikidataProvider from '../providers/WikidataProvider';


const LayoutRoute = () => {
    return (
        <WikidataProvider>
            <main role='main' className='flex min-h-full'>
                <Aside />
                <div className='flex flex-col justify-items-stretch w-full'>
                    <Header />
                    <div className='flex-1 w-full'>
                        <Outlet />
                    </div>
                    <Footer />
                </div>
            </main>
        </WikidataProvider>
    );
};


export default LayoutRoute;