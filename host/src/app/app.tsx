import * as React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import styles from './app.module.css';
import Remote from 'remote/Module';

export function App() {
  return (
    <div>
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/remote">Remote</Link>
          </li>
        </ul>
      </div>
      <React.Suspense>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1>Home</h1>
                <p>This is the home page</p>
              </>
            }
          />
          <Route path="/remote" element={<Remote />} />
        </Routes>
      </React.Suspense>
    </div>
  );
}

export default App;
