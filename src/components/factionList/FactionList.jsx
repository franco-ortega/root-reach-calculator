'use client';

import factions from '../../data/factions';
import Faction from '../faction/faction';
import styles from './FactionList.module.css';

export default function FactionList({ setSelectedFactions }) {
  return (
    <ul className={styles.FactionList}>
      {factions.map(({ title, reach }) => (
        <Faction
          key={title}
          title={title}
          reach={reach}
          setSelectedFactions={setSelectedFactions}
        />
      ))}
    </ul>
  );
}
