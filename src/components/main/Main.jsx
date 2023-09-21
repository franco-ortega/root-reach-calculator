import ReachPerPlayerCount from '../reachPerPlayerCount/ReachPerPlayerCount';
import SelectPlayersAndFactions from '../selectPlayersAndFactions/SelectPlayersAndFactions';
import styles from './Main.module.css';

export default function Main() {
  return (
    <main className={styles.Main}>
      <ReachPerPlayerCount />
      <SelectPlayersAndFactions />
    </main>
  );
}
