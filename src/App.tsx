import '@fontsource/outfit';
import '@fontsource/roboto';
import styles from './App.module.css';
import { About } from './components/about/About';
import { Experience } from './components/experience/Experience';
import { Hero } from './components/hero/Hero';
import { NavBar } from './components/navbar/NavBar';

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Hero />
      <About />
      <Experience />
    </div>
  );
}

export default App;
