'use client';

import { useCallback, useState } from 'react';
import reachData from '../../data/reach';
import FactionList from '../factionList/FactionList';
import styles from './Factions.module.css';
import { useFaction } from '../hooks/useFaction';

export default function Factions({ playerCount }) {
  const {
    selectedFactions,
    cachedAddFaction,
    cachedRemoveFaction,
    isPlayerCountFull,
    currentReach,
  } = useFaction(playerCount);

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
