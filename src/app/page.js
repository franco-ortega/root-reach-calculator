import Header from '@/components/header/Header';
import ReachPerPlayerCount from '../components/reachPerPlayerCount/ReachPerPlayerCount';
import SelectPlayersAndFactions from '@/components/selectPlayersAndFactions/SelectPlayersAndFactions';
import styles from './page.module.css';
import Main from '@/components/main/Main';

export default function Home() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}
