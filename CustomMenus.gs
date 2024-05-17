// Create Simple Menu
function createEmptyMenu() {
  // Create the menu
  var menu = SpreadsheetApp.getUi().createMenu("📅 GCalendar Sync");

  // Add item to the menu
  menu.addItem("Add Selected Row to Google Calendar", "addToCalendarLoop");
  
  menu.addToUi();
}
