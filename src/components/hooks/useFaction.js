import { useCallback, useState } from 'react';

export const useFaction = () => {
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

  return {
    selectedFactions,
    cachedAddFaction,
    cachedRemoveFaction,
  };
};
