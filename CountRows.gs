// Count Rows
function countRows() {
  // Get Sheet
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Agenda 2024');

  // Get selected cells
  var selection = sheet.getSelection();

  // Get rows data
  var firstRow = selection.getActiveRange().getRow();
  var lastRow = selection.getActiveRange().getLastRow();
  var totalRow = 1+lastRow-firstRow;

  console.log('First Row: ' + firstRow);
  console.log('Last Row: ' + lastRow);
  console.log('Total Row: '+totalRow);
}
