import reachData from '../../data/reach';
import styles from './ReachPerPlayerCount.module.css';

export default function ReachPerPlayerCount() {
  const data = Object.entries(reachData);

  return (
    <div className={styles.ReachPerPlayerCount}>
      <h2>Reach per Player Count</h2>
      <ul>
        {data.map(([playerCount, reach]) => (
          <li key={playerCount}>
            <span>{playerCount} Players</span> - <span>Reach: {reach}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
