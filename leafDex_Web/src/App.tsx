import Test from './components/Test';
import { PlantProvider } from './context/PlantContext';
import Navbar from './components/ui/Navbar';
import './index.css';

function App() {
  return (
    <>
      <Navbar />
      <PlantProvider>
        <Test />
      </PlantProvider>
    </>
  );
}

export default App;
