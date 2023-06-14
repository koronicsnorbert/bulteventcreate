function createEvent(length, subject) {
  // A naptár beállítása
  var calendar = CalendarApp.getDefaultCalendar();
  
  // A következő hét dátumainak beállítása
  var startDate = getNextMonday();
  var endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + 5); // +5, hogy a következő szombat legyen, ami nem lesz benne az intervallumban
  
  // Az események hosszának és tárgyának beállítása
  var eventLength = length; // Az esemény hossza percben
  var eventSubject = subject;
  
  // A napokon végigmenve
  for (var d = new Date(startDate); d < endDate; d.setDate(d.getDate() + 1)) {
    // Az adott napi események lekérése
    var events = calendar.getEventsForDay(d);
    // Az események kezdési és befejezési idejének megállapítása
    var startTimes = events.map(function(e) {return e.getStartTime();});
    var endTimes = events.map(function(e) {return e.getEndTime();});
    
    // A nap 8:00-tól 12:00-ig és 13:00-tól 18:00-ig terjedő időszakának beállítása
    var morningStart = new Date(d.setHours(8, 0, 0, 0));
    var morningEnd = new Date(d.setHours(12, 0, 0, 0));
    var afternoonStart = new Date(d.setHours(13, 0, 0, 0));
    var afternoonEnd = new Date(d.setHours(18, 0, 0, 0));
    
    // Esemény létrehozása a délelőttön és délutánon, ha elegendő hely van
    if (canCreateEvent(morningStart, morningEnd, startTimes, endTimes, eventLength, calendar, eventSubject)) continue;
    if (canCreateEvent(afternoonStart, afternoonEnd, startTimes, endTimes, eventLength, calendar, eventSubject)) continue;
  }
}

function getNextMonday() {
  var d = new Date();
  d.setDate(d.getDate() + (1 + 7 - d.getDay()) % 7); // Hétfőre állítás
  return d;
}

function canCreateEvent(periodStart, periodEnd, startTimes, endTimes, eventLength, calendar, eventSubject) {
  if ((startTimes[0] - periodStart) >= eventLength*60000) {
    calendar.createEvent(eventSubject, periodStart, new Date(periodStart.getTime() + eventLength*60000));
    return true;
  } else {
    for (var i = 0; i < startTimes.length - 1; i++) {
      if ((startTimes[i + 1] - endTimes[i]) >= eventLength*60000 && endTimes[i] >= periodStart && startTimes[i + 1] <= periodEnd) {
        calendar.createEvent(eventSubject, endTimes[i], new Date(endTimes[i].getTime() + eventLength*60000));
        return true;
      }
    }
    if ((periodEnd - endTimes[endTimes.length - 1]) >= eventLength*60000) {
      calendar.createEvent(eventSubject, endTimes[endTimes.length - 1], new Date(endTimes[endTimes.length - 1].getTime() + eventLength*60000));
      return true;
    }
  }
  return false;
}

createEvent(45, "Megbeszélés");