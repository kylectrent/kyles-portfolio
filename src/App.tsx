import '@fontsource/outfit';
import '@fontsource/roboto';
import styles from './App.module.css';
import { NavBar } from './components/NavBar/NavBar';

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
    </div>
  );
}

export default App;
