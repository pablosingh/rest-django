import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import ListTasksPage from "./pages/ListTasksPage";
import FormTaskPage from "./pages/FormTaskPage";
import Navigation from './components/Navigation';

export default function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Navigate to='/tasks' element={<ListTasksPage/>}/>}/>
        <Route path="/tasks" element={<ListTasksPage/>}/>
        <Route path="/create" element={<FormTaskPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

