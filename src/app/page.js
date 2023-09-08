import Factions from './components/factions/Factions';
import ReachPerPlayerCount from './components/reachPerPlayerCount/ReachPerPlayerCount';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Root Reach Calculator</h1>
      <ReachPerPlayerCount />
      <Factions />
    </main>
  );
}
