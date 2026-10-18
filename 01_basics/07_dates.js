let myDate = new  Date();
console.log("Date:", myDate);
console.log(typeof myDate); // object

console.log(myDate.toString()); // Fri Jun 14 2024 12:34:56 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); // Fri Jun 14 2024
console.log(myDate.toTimeString()); // 12:34:56 GMT+0530 (India Standard Time)
console.log(myDate.toISOString()); // 2024-06-14T07:04:56.789Z (ISO 8601 format)
console.log(myDate.getFullYear()); // 2024
console.log(myDate.getMonth()); // 5 (months are zero-indexed, so June is 5)
console.log(myDate.getDate()); // 14
console.log(myDate.getDay()); // 5 (days are zero-indexed, so Friday is 5)
console.log(myDate.getHours()); // 12
console.log(myDate.getMinutes()); // 34
console.log(myDate.getSeconds()); // 56

let myCreatedDate = new Date(2024, 5, 14, 12, 34, 56); // year, month (0-indexed), day, hours, minutes, seconds
console.log("Created Date:", myCreatedDate);
console.log(myCreatedDate.toString()); // Fri Jun 14 2024 12:34:56 GMT+0530 (India Standard Time)

let myTimestampDate = new Date()
console.log(myTimestampDate.getTime()); // 1718322896789 (milliseconds since January 1, 1970)
console.log(myTimestampDate.getMonth() + 1); // 6 (months are zero-indexed, so June is 5)

let newDate = new Date();
console.log(newDate.toLocaleDateString("en-US", { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
})); // Friday, June 14, 2024  
