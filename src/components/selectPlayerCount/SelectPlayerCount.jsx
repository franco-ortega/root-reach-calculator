import reachData from '../../data/reach';
import styles from './SelectPlayerCount.module.css';

export default function SelectPlayerCount({ handlePlayerCount }) {
  const reachList = Object.entries(reachData);

  return (
    <div className={styles.SelectPlayerCount}>
      <h2>Select Player Count</h2>
      <select onChange={(e) => handlePlayerCount(e)}>
        <option></option>
        {reachList.map(([playerCount]) => (
          <option key={playerCount} value={playerCount}>
            {playerCount} Players
          </option>
        ))}
      </select>
    </div>
  );
}
