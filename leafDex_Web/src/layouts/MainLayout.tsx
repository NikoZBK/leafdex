import { Outlet } from 'react-router-dom';
import Navbar from '../components/ui/Navbar';
import { classes } from '../styles/classes';

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-base-100">
      <Navbar />
      <main className={classes.container}>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
