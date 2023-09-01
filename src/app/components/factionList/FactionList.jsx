import factions from '../../../data/factions';

export default function FactionList() {
  return (
    <ul>
      <li>Faction - Reach</li>
      {factions.map((faction) => (
        <li key={faction.faction}>
          <span>{faction.faction}</span> - <span>{faction.reach}</span>
        </li>
      ))}
    </ul>
  );
}
