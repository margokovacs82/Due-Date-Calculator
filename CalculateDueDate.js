'use strict';   

function calculateDueDate(submitDate, turnAroundTime) {                    
  const HOURS_IN_MILLISECONDS = 1000 * 60 * 60;
  let hoursGivenInTheForm = parseInt(turnAroundTime, 10);
  let dueDateBeforeCheck;
  let dueDate;
  
  let daysToWorkingHours = Math.floor(hoursGivenInTheForm / 8); // 8 hours count as one day
  let remainingHours = hoursGivenInTheForm % 8;

   // the time of finishing the task, timestamp format (can fall on overtime and on weekends)
  dueDateBeforeCheck = submitDate + (remainingHours * HOURS_IN_MILLISECONDS);
  // what time would the task be finished, in hours
  let getTheHours = new Date(dueDate).getUTCHours();

  // if the deadline is after 17:00 it gets corrected
  if (getTheHours > 16) {                                                                         
    dueDate = dueDateBeforeCheck + (16 * HOURS_IN_MILLISECONDS); 
  // if the deadline falls after 24:00 it gets corrected
  } else if (getTheHours === 0) {
    dueDate = submitDate + (23 * HOURS_IN_MILLISECONDS);
  // if the deadline is before 17:00 it is not corrected
  } else {
    dueDate = dueDateBeforeCheck;
  }

  /* after the finishing hours of the deadline are corrected
  we iterate through the days to eliminate the weekends */
  for (let i=0; i < daysToWorkingHours; i++) {
    let getTheWeekends = new Date(dueDate).getUTCDay();
    if (getTheWeekends === 5) {
      dueDate += (2 * 24 * HOURS_IN_MILLISECONDS);
    }
    dueDate += (24 * HOURS_IN_MILLISECONDS);
  }
  return new Date(dueDate).toUTCString();
}
  
console.log(new Date(1530092388026).toUTCString()); // logging out the test case value 
console.log(calculateDueDate(1530092388026, '26h')); // logging out the result of the method
