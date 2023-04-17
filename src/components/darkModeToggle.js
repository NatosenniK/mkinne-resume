import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

function DarkModeToggle() {
  const [isDarkModeOn, setIsDarkModeOn] = useState(false);

  useEffect(() => {
    if (isDarkModeOn) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkModeOn]);

  function handleToggleClick() {
    setIsDarkModeOn(!isDarkModeOn);
  }

  return (
    <div className='mt-3'>
      <input
        type="checkbox"
        id="checkbox"
        className='checkbox'
        checked={isDarkModeOn}
        onChange={handleToggleClick}
      />
      <label htmlFor="checkbox" className="checkbox-label">
        <FontAwesomeIcon icon={faMoon} />
        <FontAwesomeIcon icon={faSun} />
        <span className="circle"></span>
      </label>
    </div>
  );
}

export default DarkModeToggle;
