import Header from '@/components/header/Header';
import ReachPerPlayerCount from '../components/reachPerPlayerCount/ReachPerPlayerCount';
import SelectPlayersAndFactions from '@/components/selectPlayersAndFactions/SelectPlayersAndFactions';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <ReachPerPlayerCount />
        <SelectPlayersAndFactions />
      </main>
    </>
  );
}
