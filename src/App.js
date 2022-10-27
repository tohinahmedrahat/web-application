import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Router/Routes/Routes';

function App() {
  
  return (
    <div className="App dark:bg-slate-900 dark:text-gray-200">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
