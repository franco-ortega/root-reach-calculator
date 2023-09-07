import reach from '../../../data/reach';

export default function ReachByPlayerCount() {
  console.log(reach);
  const data = Object.entries(reach);
  console.log(data);
  return (
    <div>
      <h2>Reach per Player Count</h2>
      <ul>
        {data.map((playerCount) => (
          <li key={playerCount[0]}>
            <span>{playerCount[0]} Players</span> -{' '}
            <span>Reach - {playerCount[1]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
