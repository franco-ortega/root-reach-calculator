'use client';

import { useState } from 'react';
import FactionList from '../factionList/FactionList';
import styles from './Factions.module.css';

export default function Factions({ reach }) {
  const [selectedFactions, setSelectedFactions] = useState([]);

  return (
    <div className={styles.Factions}>
      <h3>Faction - Reach</h3>
      <FactionList setSelectedFactions={setSelectedFactions} />
      Total Reach: {selectedFactions.reduce(
        (acc, cur) => acc + cur.reach,
        0
      )} / {reach}
    </div>
  );
}
