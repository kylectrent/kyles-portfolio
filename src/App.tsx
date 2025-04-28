import '@fontsource/outfit';
import '@fontsource/roboto';
import styles from './App.module.css';
import { NavBar } from './components/NavBar/NavBar';
import { About } from './components/about/About';
import { Hero } from './components/hero/Hero';

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Hero />
      <About />
    </div>
  );
}

export default App;
