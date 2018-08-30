'use strict';   

function calculateDueDate(submitDate, turnAroundTime) {                    
  const HOURS_IN_MILLISECONDS = 1000 * 60 * 60;
  let hoursGivenInTheForm = parseInt(turnAroundTime, 10);
  let dueDateBeforeCheck;
  let dueDate;
  
  let daysToWorkingHours = Math.floor(hoursGivenInTheForm / 8); 
  dueDateBeforeCheck = submitDate + (remainingHours * HOURS_IN_MILLISECONDS);
  let getTheHours = new Date(dueDate).getUTCHours();

  if (getTheHours > 16) {                                                                         
    dueDate = dueDateBeforeCheck + (16 * HOURS_IN_MILLISECONDS); 
  } else if (getTheHours === 0) {
    dueDate = submitDate + (23 * HOURS_IN_MILLISECONDS);
  } else {
    dueDate = dueDateBeforeCheck;
  }

  for (let i=0; i < daysToWorkingHours; i++) {
    let getTheWeekends = new Date(dueDate).getUTCDay();
    if (getTheWeekends === 5) {
      dueDate += (2 * 24 * HOURS_IN_MILLISECONDS);
    }
    dueDate += (24 * HOURS_IN_MILLISECONDS);
  }
  return new Date(dueDate).toUTCString();
}
  
console.log(new Date(1530092388026).toUTCString()); 
console.log(calculateDueDate(1530092388026, '26h'));
