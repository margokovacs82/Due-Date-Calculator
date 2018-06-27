'use strict';   

function calculateDueDate(submitDate, turnAroundTime) {                    // the function receives a submitdate in timestamp format and a turnaround time in a string
  let hoursGivenInTheForm = parseInt(turnAroundTime, 10);                  // parsing the number in the string
  let dueDateWithoutOvertimeHandling = 0;                             
  
  let daysToWorkingHours = Math.floor(hoursGivenInTheForm / 8) * 24;        // 8 hours count as a day
  let remainingHours = hoursGivenInTheForm % 8; 
  let allTheHoursTogether = daysToWorkingHours + remainingHours; 
  let timeTillDeadLine = allTheHoursTogether * 1000 * 60 * 60;              // getting the time till deadline in timestamp format
  
  dueDateWithoutOvertimeHandling = submitDate + timeTillDeadLine;           //the time of finishing the task, timestamp format - can fall to overtime and on weekends
   
  let getTheHours = new Date(dueDateWithoutOvertimeHandling).getUTCHours();                         //what time would the task be finished, in hours
    if (getTheHours > 16) {                                                                         // if after 17:00...
      let difference = getTheHours - 16;                                                            // time of finishing minus 17: the hours of work for tomorrow
      let endOfTheDayBefore = dueDateWithoutOvertimeHandling - (difference * 1000 * 60 * 60);    
      let finalDueDate = endOfTheDayBefore + (16 * 1000 * 60 * 60) + (difference * 1000 * 60 * 60); //end of the previous working day + 16 hours + the hours of work remaining
      let getTheWeekends = new Date(finalDueDate).getDay();                                         //exclude weekends
        if (getTheWeekends === 6) {                                                                 // if the date falls on Saturday, add 2 days to the deadline
          return finalDueDate + (2 * 1000 * 60 * 60);
        }
        if (getTheWeekends === 7) {                                                                 // if the due date is on Sunday, add 1 day to the deadline
          return finalDueDate + (1000 * 60 * 60);
        }
          else {
            return new Date(finalDueDate).toUTCString();                                            // else: just return the finalDueDate
          }
    } else {
      let getTheWeekends = new Date(dueDateWithoutOvertimeHandling).getDay();                       // in case the due date is between 9am and 5 pm
        if (getTheWeekends === 6) {
          return dueDateWithoutOvertimeHandling + (2 * 1000 * 60 * 60);
        }
        if (getTheWeekends === 7) {
          return dueDateWithoutOvertimeHandling + (1000 * 60 * 60);
        }
          else {
            return new Date(dueDateWithoutOvertimeHandling).toUTCString(); 
          }
    }
};

console.log(new Date(1530024580143).toUTCString());    // logging out the test case value 
console.log(calculateDueDate(1530024580143, '16h'));   // logging out the result of the method

