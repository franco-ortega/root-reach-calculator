import reachData from '../../../data/reach';
import styles from './SelectPlayerCount.module.css';

export default function SelectPlayerCount({ setReach }) {
  const reachList = Object.entries(reachData);

  return (
    <div className={styles.SelectPlayerCount}>
      <h3>Select Player Count</h3>
      <select onChange={({ target }) => setReach(Number(target.value))}>
        <option></option>
        {reachList.map((playerCount) => (
          <option key={playerCount[0]} value={playerCount[1]}>
            {playerCount[0]} Players
          </option>
        ))}
      </select>
    </div>
  );
}
