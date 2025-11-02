import React from 'react';
import '../styles/MonthSelector.css';

function MonthSelector({ selectedMonth, setSelectedMonth }) {
  const months = ['Septembre 2025', 'Octobre 2025', 'Novembre 2025', 'Décembre 2025'];

  return (
    <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
      {months.map(month => (
        <option key={month} value={month}>{month}</option>
      ))}
    </select>
  );
}

export default MonthSelector;
