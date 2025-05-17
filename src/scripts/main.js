'use strict';

// write your code here
const table = document.querySelector('table');
const rows = [...table.querySelectorAll('tr')];

rows.forEach((row, i) => {
  const section = row.closest('thead, tfoot') ? 'th' : 'td';
  const cell = document.createElement(section);

  cell.textContent = rows[i].children[1]?.textContent || '';
  row.insertBefore(cell, row.lastElementChild);
});
