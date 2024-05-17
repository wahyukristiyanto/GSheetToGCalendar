// GSheetToGCalendar Loop !
// * This code get all row till selected row to create Event
function addToCalendarLoop() {

  // Get Sheet
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Your Sheet Name');

  // Get Selection or Cells
  var selection = sheet.getSelection();
  var firstRow = selection.getActiveRange().getRow();
  var lastRow = selection.getActiveRange().getLastRow();
  var totalRow = 1+lastRow-firstRow;

  var startRow = firstRow-1;
  var rowToLoop = totalRow;

  // Lets Loop It !
  for(var i=1;i<=rowToLoop;i++){
    
    // Get the title from the the value
    // * This code get the title from startRow, column 2, 1 row, and 1 column
    var title = sheet.getSheetValues(startRow+i,2,1,1)[0].toString();

    // Get the starting date 
    // * This code get the value from startRow, column 1, 1 row, and 1 column
    var dateStart = new Date(sheet.getSheetValues(startRow+i,1,1,1)[0].toString());

    // Get the starting date 
    // * This code Add + 1 Hour to your starting date
    var dateEnd = new Date(dateStart.getTime() + 1 * 60 * 60 * 1000);

    // Get the location
    // *This code get the location from startRow, column 3, 1 row, and 1 column
    var loc = sheet.getSheetValues(startRow+i,3,1,1).toString();

    // Integrate with Google Calendar via Calendar ID
    // * Locate your Calendar ID : Right clidk on your calendar -> Setting & Share -> Scroll to Calendar ID)
    CalendarApp.getCalendarById("Your Calendar ID").createEvent(
      title,
      dateStart,
      dateEnd,
      {
        location: loc,
        description: title
      }
    );

    // Always check your output
    Logger.log("Row "+i+" Done");

  }
}
