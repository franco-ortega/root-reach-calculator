import Header from '@/components/header/Header';
import ReachPerPlayerCount from '../components/reachPerPlayerCount/ReachPerPlayerCount';
import SelectFactions from '../components/selectFactions/SelectFactions';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <SelectFactions />
    </main>
  );
}
