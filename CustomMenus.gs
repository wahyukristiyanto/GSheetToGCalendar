function createEmptyMenu() {
   var menu = SpreadsheetApp.getUi().createMenu("📅 GCalendar Sync");
   menu.addItem("Add Selected Row to Google Calendar", "addToCalendarLoop");
   menu.addToUi();
}
