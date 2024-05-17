// Count Rows
function countRows() {
  // Get Sheet
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Your Sheet Name');

  // Get selected cells
  var selection = sheet.getSelection();

  // Get rows data
  var firstRow = selection.getActiveRange().getRow();
  var lastRow = selection.getActiveRange().getLastRow();
  var totalRow = 1+lastRow-firstRow;

  // Always check your output
  console.log('First Row: ' + firstRow);
  console.log('Last Row: ' + lastRow);
  console.log('Total Row: '+totalRow);
}
