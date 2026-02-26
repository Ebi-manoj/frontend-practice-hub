import { Route, Routes } from 'react-router-dom';
import { MyRoutes } from './Routes';
import { MyAccordion } from './Accordion';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MyRoutes />} />
        <Route path="/accordion" element={<MyAccordion />} />
      </Routes>
    </div>
  );
}

export default App;
