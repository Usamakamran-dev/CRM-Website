import './App.css';
import router from './routes/AppRoutes';
import { RouterProvider } from 'react-router-dom';
import LeadProvider from './context/LeadProvider';

function App() {
  return (
    <LeadProvider>
        <RouterProvider router={router}></RouterProvider>
     </LeadProvider>
  )}
  export default App
