import { Outlet } from 'react-router-dom';
import Navbar from '../components/ui/Navbar';

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-base-100">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
