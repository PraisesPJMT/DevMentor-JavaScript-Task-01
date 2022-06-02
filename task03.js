/* Date is a superb data available in 
Javascript which is of type `object`. 
Write a Js code that detects if a given 
date is valid. (You are expected to provide 
5 data samples that can be used to test 
your solution)*/

//Global variables
const date1 = '01/07/22';
const date2 = '02/07/22';
const date3 = '04/07/22';
const date4 = '03/07/22';
const date5 = '04/07/22';


function dateValidation (date) {
    let dateValidity;

    //Checking validity of Date
    if (isNaN(date) && !isNaN(Date.parse(date))) {
        dateValidity = "Date Validity: Valid";
    } else {
        dateValidity = "Date Validity: Invalid"
    }
    return dateValidity;
}
console.log(dateValidation(date1));