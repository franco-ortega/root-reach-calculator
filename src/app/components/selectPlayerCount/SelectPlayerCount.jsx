import styles from './SelectPlayerCount.module.css';
import reach from '../../../data/reach';

export default function SelectPlayerCount() {
  const reachList = Object.entries(reach);

  return (
    <div className={styles.SelectPlayerCount}>
      <p>Select Player Count</p>
      <select>
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
