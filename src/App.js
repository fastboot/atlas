import Main from './main'
import Chat from './chat'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route exact path = '/' element={<Main />} />
      <Route exact path = '/chat' element={<Chat />} />
    </Routes>
    
  );
}

export default App;
