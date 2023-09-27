import { useCallback, useState } from 'react';
import reachData from '../../data/reach';

export const useFaction = (playerCount) => {
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

  let requiredReach = 0;
  for (let players in reachData) {
    if (players == playerCount) requiredReach = reachData[playerCount];
  }

  return {
    selectedFactions,
    cachedAddFaction,
    cachedRemoveFaction,
    isPlayerCountFull,
    currentReach,
    requiredReach,
  };
};
