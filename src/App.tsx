import { Route, Routes } from 'react-router';

import { Main } from './pages/Main';

import './styles/App.css';
import { CC } from './pages/CC';

export function App() {
  return (
    <Routes>
      <Route index Component={Main} />
      <Route path="content_creator" Component={CC} />
    </Routes>
  );
}

export default App;
