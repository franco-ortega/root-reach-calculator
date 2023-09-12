'use client';

import { useState } from 'react';
import Factions from '../factions/Factions';
import SelectPlayerCount from '../selectPlayerCount/SelectPlayerCount';

export default function SelectFactions() {
  const [reach, setReach] = useState(0);

  console.log({ reach });

  return (
    <>
      <SelectPlayerCount setReach={setReach} />
      <Factions />
    </>
  );
}
