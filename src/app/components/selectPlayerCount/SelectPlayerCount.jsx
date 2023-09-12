import styles from './SelectPlayerCount.module.css';
import reachData from '../../../data/reach';

export default function SelectPlayerCount({ setReach }) {
  const reachList = Object.entries(reachData);

  return (
    <div className={styles.SelectPlayerCount}>
      <p>Select Player Count</p>
      <select onChange={({ target }) => setReach(Number(target.value))}>
        <option></option>
        {reachList.map((playerCount) => (
          <option key={playerCount[0]} value={playerCount[0]}>
            {playerCount[0]} Players
          </option>
        ))}
      </select>
    </div>
  );
}
