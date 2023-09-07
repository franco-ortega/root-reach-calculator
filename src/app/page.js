import FactionList from './components/factionList/FactionList';
import ReachByPlayerCount from './components/reachByPlayerCount/ReachByPlayerCount';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Root Reach Calculator</h1>
      <ReachByPlayerCount />
      <FactionList />
    </main>
  );
}
