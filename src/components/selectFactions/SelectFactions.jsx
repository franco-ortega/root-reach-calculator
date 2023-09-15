'use client';

import { useState } from 'react';
import Factions from '../factions/Factions';
import SelectPlayerCount from '../selectPlayerCount/SelectPlayerCount';

export default function SelectFactions() {
  const [playerCount, setPlayerCount] = useState(0);

  return (
    <>
      <SelectPlayerCount setPlayerCount={setPlayerCount} />
      <Factions playerCount={playerCount} />
    </>
  );
}
