'use client';

import { useState } from 'react';
import reachData from '../../data/reach';
import FactionList from '../factionList/FactionList';
import styles from './Factions.module.css';

export default function Factions({ playerCount }) {
  const [selectedFactions, setSelectedFactions] = useState([]);

  const factionCount = selectedFactions.length;
  const isPlayerCountFull = playerCount === factionCount && playerCount > 0;

  let reach = 0;
  for (let players in reachData) {
    if (players == playerCount) reach = reachData[playerCount];
  }

  return (
    <div className={styles.Factions}>
      <h3>Faction - Reach</h3>
      <FactionList
        setSelectedFactions={setSelectedFactions}
        isPlayerCountFull={isPlayerCountFull}
      />
      <p>
        Current Reach:{' '}
        {selectedFactions.reduce((acc, cur) => acc + cur.reach, 0)}
      </p>
      <p>Required Reach: {reach}</p>
    </div>
  );
}
