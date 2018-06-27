'use strict';   

function calculateDueDate(submitDate, turnAroundTime) {                    

  const HOURS_IN_MILLISECONDS = 1000 * 60 * 60;
  let hoursGivenInTheForm = parseInt(turnAroundTime, 10);
  let dueDateBeforeCheck;
  let dueDate;
  
  let daysToWorkingHours = Math.floor(hoursGivenInTheForm / 8);
  // 8 hours counts as one day
  let remainingHours = hoursGivenInTheForm % 8;

  dueDateBeforeCheck = submitDate + (remainingHours * HOURS_IN_MILLISECONDS);
  // the time of finishing the task, timestamp format - can fall to overtime and on weekends
  let getTheHours = new Date(dueDate).getUTCHours();
  // what time would the task be finished, in hours

  if (getTheHours > 16) {                                                                         
    dueDate = dueDateBeforeCheck + (16 * HOURS_IN_MILLISECONDS); 
    // if the deadline falls after 17:00 it gets corrected
  }
  else if (getTheHours === 0) {
    dueDate = submitDate + (23 * HOURS_IN_MILLISECONDS);
    // if the deadline falls after 24:00 it gets corrected
  }
  else {
    dueDate = dueDateBeforeCheck;
    // if the deadline falls before 17:00 it is not corrected
  }

  for (let i=0; i < daysToWorkingHours; i++) {
    // after the finishing hours of the deadline are corrected
    // we iterate through the days to eliminate the weekends
    let getTheWeekends = new Date(dueDate).getUTCDay();
    if (getTheWeekends === 5) {
      dueDate += (2 * 24 * HOURS_IN_MILLISECONDS);
    }
    dueDate += (24 * HOURS_IN_MILLISECONDS);
  }
  return new Date(dueDate).toUTCString();
}
  
console.log(new Date(1530092388026).toUTCString());    
// logging out the test case value 
console.log(calculateDueDate(1530092388026, '26h'));   
// logging out the result of the method
