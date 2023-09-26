'use client';

import { useCallback, useState } from 'react';
import reachData from '../../data/reach';
import FactionList from '../factionList/FactionList';
import styles from './Factions.module.css';

export default function Factions({ playerCount }) {
  const [selectedFactions, setSelectedFactions] = useState([]);

  const addFaction = (title, reach) => {
    setSelectedFactions((prev) => [...prev, { title, reach }]);
  };

  const cachedAddFaction = useCallback(addFaction, []);

  const removeFaction = (title) => {
    setSelectedFactions((prev) =>
      prev.filter((faction) => title !== faction.title)
    );
  };

  const cachedRemoveFaction = useCallback(removeFaction, []);

  const factionCount = selectedFactions.length;
  const isPlayerCountFull = playerCount === factionCount && playerCount > 0;

  const currentReach = selectedFactions.reduce(
    (acc, cur) => acc + cur.reach,
    0
  );

  let reach = 0;
  for (let players in reachData) {
    if (players == playerCount) reach = reachData[playerCount];
  }

  return (
    <div className={styles.Factions}>
      <h3>Faction - Reach</h3>
      <FactionList
        isPlayerCountFull={isPlayerCountFull}
        cachedAddFaction={cachedAddFaction}
        cachedRemoveFaction={cachedRemoveFaction}
      />
      <p>Current Reach: {currentReach}</p>
      <p>Required Reach: {reach}</p>
    </div>
  );
}
