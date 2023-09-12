'use client';

import factionsData from '../../../data/factions';
import Faction from '../faction/Faction';
import styles from './FactionList.module.css';

export default function FactionList({ setSelectedFactions }) {
  return (
    <ul className={styles.FactionList}>
      {factionsData.map(({ title, reach }) => (
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
