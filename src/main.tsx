import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LayoutRoute from './routes/LayoutRoute';
import HomePage from './pages/HomePage';
import './css/index.css';

const router = createBrowserRouter([
   {
      path: '/',
      element: <LayoutRoute />,
      children: [
         {
            path: '/',
            element: <HomePage />
         }
      ]
   }
])

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
   <RouterProvider router={router} />
);