// GSheetToGCalendar
function myFunction() {

  // Get Sheet
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Your Sheet Name');

  // Get the title from the the value
  // * This code get the title from row 6, column 2, 1 row, and 1 column or B6 Cell
  var title = sheet.getSheetValues(6,2,1,1)[0].toString();

  // Get the starting date 
  // * This code get the value from row 6, column 1, 1 row, and 1 column or A6 Cell
  var dateStart = new Date(sheet.getSheetValues(6,1,1,1)[0].toString());

  // Get the starting date 
  // * This code Add + 1 Hour to your starting date
  var dateEnd = new Date(dateStart.getTime() + 1 * 60 * 60 * 1000);

  // Get the location
  // *This code get the location from row 6, column 3, 1 row, and 1 column or C6 Cell
  var loc = sheet.getSheetValues(6,3,1,1).toString();

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
