'use client';

import factions from '../../../data/factions';
import { useEffect, useState } from 'react';
import Faction from '../Faction/Faction';

export default function FactionList() {
  const [selectedFactions, setSelectedFactions] = useState([]);

  console.log('SELECTED FACTIONS:', selectedFactions);

  return (
    <ul>
      <li>Faction - Reach</li>
      {factions.map(({ title, reach }) => (
        <Faction
          key={title}
          title={title}
          reach={reach}
          setSelectedFactions={setSelectedFactions}
        />
      ))}
      <div>
        Total Reach: {selectedFactions.reduce((acc, cur) => acc + cur.reach, 0)}
      </div>
    </ul>
  );
}
