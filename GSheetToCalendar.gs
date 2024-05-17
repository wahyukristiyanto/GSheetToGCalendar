// GSheetToGCalendar
// * This code get the specific row number 6 to create Event
function addToCalendar() {

  // Get Sheet
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Your Sheet Name');

  var startRow = 6;

  // Get the title from the the value
  // * This code get the title from startRow, column 2, 1 row, and 1 column or B6 Cell
  var title = sheet.getSheetValues(startRow,2,1,1)[0].toString();

  // Get the starting date 
  // * This code get the value from startRow, column 1, 1 row, and 1 column or A6 Cell
  var dateStart = new Date(sheet.getSheetValues(startRow,1,1,1)[0].toString());

  // Get the starting date 
  // * This code Add + 1 Hour to your starting date
  var dateEnd = new Date(dateStart.getTime() + 1 * 60 * 60 * 1000);

  // Get the location
  // *This code get the location from startRow, column 3, 1 row, and 1 column or C6 Cell
  var loc = sheet.getSheetValues(startRow,3,1,1).toString();

  // Always check your output
  Logger.log("Title: "+title);
  Logger.log("Starting Date: "+dateStart);
  Logger.log("End Date: "+dateEnd);
  Logger.log("Location: "+loc);

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
}
