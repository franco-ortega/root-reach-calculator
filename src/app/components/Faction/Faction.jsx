import { useEffect, useState } from 'react';
import styles from './Faction.module.css';

export default function Faction({ title, reach, setSelectedFactions }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => setIsChecked((prev) => !prev);

  useEffect(() => {
    if (isChecked) setSelectedFactions((prev) => [...prev, { title, reach }]);
    else
      setSelectedFactions((prev) =>
        prev.filter((faction) => title !== faction.title)
      );
  }, [title, reach, isChecked, setSelectedFactions]);

  return (
    <li className={styles.Faction}>
      <label htmlFor={title}>
        <input id={title} type='checkbox' onChange={handleChange} />
        <span>
          {title} - {reach}
        </span>
      </label>
    </li>
  );
}
