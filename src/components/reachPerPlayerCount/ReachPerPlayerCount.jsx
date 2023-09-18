import reachData from '../../data/reach';
import styles from './ReachPerPlayerCount.module.css';

export default function ReachPerPlayerCount() {
  const playerCountAndReachList = Object.entries(reachData);

  return (
    <div className={styles.ReachPerPlayerCount}>
      <h2>Reach per Player Count</h2>
      <ul>
        {playerCountAndReachList.map(([playerCount, reach]) => (
          <li key={playerCount}>
            {playerCount} Players - Reach: {reach}
          </li>
        ))}
      </ul>
    </div>
  );
}
