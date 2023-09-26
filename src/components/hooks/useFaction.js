import { useCallback, useState } from 'react';

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

  return {
    selectedFactions,
    cachedAddFaction,
    cachedRemoveFaction,
    isPlayerCountFull,
  };
};
