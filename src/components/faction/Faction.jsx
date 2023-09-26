import { useEffect, useState } from 'react';
import styles from './Faction.module.css';

export default function Faction({
  title,
  reach,
  isPlayerCountFull,
  cachedAddFaction,
  cachedRemoveFaction,
}) {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => setIsChecked((prev) => !prev);

  useEffect(() => {
    if (isChecked) cachedAddFaction(title, reach);
    else cachedRemoveFaction();
  }, [title, reach, isChecked, cachedAddFaction, cachedRemoveFaction]);

  return (
    <li className={styles.Faction}>
      <label htmlFor={title}>
        <input
          id={title}
          type='checkbox'
          disabled={isPlayerCountFull && !isChecked}
          onChange={handleChange}
        />
        <span>
          {title} - {reach}
        </span>
      </label>
    </li>
  );
}
