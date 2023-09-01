import { useState } from 'react';

export const useAddReach = (factionReach) => {
  const [reach, useReach] = useState(0);

  useReach((prev) => prev + factionReach);

  return { reach };
};
