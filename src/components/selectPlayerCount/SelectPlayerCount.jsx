import reachData from '../../data/reach';
import styles from './SelectPlayerCount.module.css';

export default function SelectPlayerCount({ setPlayerCount }) {
  const reachList = Object.entries(reachData);

  const onPlayerCountChange = ({ target }) => {
    setPlayerCount(Number(target.value));
  };

  return (
    <div className={styles.SelectPlayerCount}>
      <h3>Select Player Count</h3>
      <select onChange={onPlayerCountChange}>
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
