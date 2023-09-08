'use client';

import { useState } from 'react';
import factions from '../../../data/factions';
import Faction from '../faction/Faction';
import styles from './FactionList.module.css';

export default function FactionList() {
  const [selectedFactions, setSelectedFactions] = useState([]);

  return (
    <ul className={styles.FactionList}>
      <h3>Faction - Reach</h3>
      {factions.map(({ title, reach }) => (
        <Faction
          key={title}
          title={title}
          reach={reach}
          setSelectedFactions={setSelectedFactions}
        />
      ))}
      <li>
        Total Reach: {selectedFactions.reduce((acc, cur) => acc + cur.reach, 0)}
      </li>
    </ul>
  );
}
