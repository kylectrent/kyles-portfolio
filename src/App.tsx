import '@fontsource/outfit';
import '@fontsource/roboto';
import styles from './App.module.css';
import { NavBar } from './components/NavBar/NavBar';
import { Hero } from './components/hero/Hero';

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Hero />
    </div>
  );
}

export default App;
