import { useEffect, useState } from 'react';

export default function Faction({ faction, reach, setSelectedFactions }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked((prev) => !prev);
  };

  useEffect(() => {
    if (isChecked) {
      setSelectedFactions((prev) => [...prev, { faction, reach, isChecked }]);
    } else {
      setSelectedFactions((prev) =>
        prev.filter((item) => faction !== item.faction)
      );
    }
  }, [faction, reach, isChecked, setSelectedFactions]);

  return (
    <li>
      <label htmlFor={faction}>
        <input id={faction} type='checkbox' onChange={handleChange} />
      </label>
      <span>{faction}</span> - <span>{reach}</span>
    </li>
  );
}
