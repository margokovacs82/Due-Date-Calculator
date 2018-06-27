'use strict';   

function calculateDueDate(submitDate, turnAroundTime) {                    

  const HOURS_IN_MILLISECONDS = 1000 * 60 * 60;
  let hoursGivenInTheForm = parseInt(turnAroundTime, 10);                  
  let dueDateBeforeCheck;     
  let dueDate;                        
  
  let daysToWorkingHours = Math.floor(hoursGivenInTheForm / 8) * 24;        
  let remainingHours = hoursGivenInTheForm % 8; 

  dueDateBeforeCheck = submitDate + (remainingHours * HOURS_IN_MILLISECONDS);
  let getTheHours = new Date(dueDate).getUTCHours();

  if (getTheHours > 16) {                                                                         
    let difference = getTheHours - 16;                                                            
    let endOfTheDayBefore = dueDateBeforeCheck - (difference * HOURS_IN_MILLISECONDS);    
    let finalDueDate = endOfTheDayBefore + (16 * HOURS_IN_MILLISECONDS) + (difference * HOURS_IN_MILLISECONDS); 
  }
  else if (getTheHours === 0) {
    dueDate = submitDate + (23 * HOURS_IN_MILLISECONDS);
  }
  else {
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
  

/*
  dueDate = submitDate + timeTillDeadLine;           
  //the time of finishing the task, timestamp format - can fall to overtime and on weekends
   
  let getTheHours = new Date(dueDate).getUTCHours();                         
  //what time would the task be finished, in hours
    if (getTheHours > 16) {                                                                         
      // if after 17:00...
      let difference = getTheHours - 16;                                                            
      // time of finishing minus 17: the hours of work for tomorrow
      let endOfTheDayBefore = dueDateWithoutOvertimeHandling - (difference * 1000 * 60 * 60);    
      let finalDueDate = endOfTheDayBefore + (16 * 1000 * 60 * 60) + (difference * 1000 * 60 * 60); 
      //end of the previous working day + 16 hours + the hours of work remaining
      let getTheWeekends = new Date(finalDueDate).getDay();                                         
      //exclude weekends
        if (getTheWeekends === 6) {                                                                 
          // if the date falls on Saturday, add 2 days to the deadline
          return finalDueDate + (2 * 1000 * 60 * 60);
        }
        if (getTheWeekends === 7) {                                                                 
          // if the due date is on Sunday, add 1 day to the deadline
          return finalDueDate + (1000 * 60 * 60);
        }
          else {
            return new Date(finalDueDate).toUTCString();                                            
            // else: just return the finalDueDate
          }
    } else {
      let getTheWeekends = new Date(dueDateWithoutOvertimeHandling).getDay();                       
      // in case the due date is between 9am and 5 pm
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

*/

console.log(new Date(1530024580143).toUTCString());    
// logging out the test case value 
console.log(calculateDueDate(1530024580143, '16h'));   
// logging out the result of the method

