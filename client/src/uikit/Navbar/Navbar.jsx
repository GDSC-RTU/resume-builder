import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import styles from './navbar.module.css';

const Navbar = ({ routes }) => {
  return (
    <Router>
      <div className={styles.container}>
        <div className={styles.routes}>
          {routes.map((RouteItem) => {
            return (
              <Link key={RouteItem.path} to={RouteItem.path}>
                <p>{RouteItem.label}</p>
              </Link>
            );
          })}
        </div>

        <div className={styles.moduleContainer}>
          <Routes>
            {routes.map((RouteItem) => {
              return (
                <Route
                  path={RouteItem.path}
                  key={RouteItem.path}
                  element={RouteItem.component()}
                />
              );
            })}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default Navbar;
