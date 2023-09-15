'use client';

import { useState } from 'react';
import Factions from '../factions/Factions';
import SelectPlayerCount from '../selectPlayerCount/SelectPlayerCount';
import styles from './SelectPlayersAndFactions.module.css';

export default function SelectPlayersAndFactions() {
  const [playerCount, setPlayerCount] = useState(0);

  return (
    <div className={styles.SelectPlayersAndFactions}>
      <SelectPlayerCount setPlayerCount={setPlayerCount} />
      {playerCount > 0 && <Factions playerCount={playerCount} />}
    </div>
  );
}
