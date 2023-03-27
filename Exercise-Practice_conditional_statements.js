//Are you Old Enough?
var age="67"
if (age>=65){
    console.log("You get your income from your pension")
} else if (age<65 && age>=18){
    console.log("Each month you get a salary")
} else if (age<18){
    console.log("You get an allowance")
} else {
    console.log("The value of the age variable is not numerical")
}

//days of the week program in Switch Statement
var day="Saturday"
switch (day){
    case 'Monday':
        console.log("Monday")
        break;
    case 'Tuesday':
        console.log("Tueday")
        break;
    case 'Wednesday':
        console.log("Wednesday")
        break;
    case 'Thursday':
        console.log("Thursday")
        break;
    case 'Friday':
        console.log("Friday")
        break;
    case 'Saturday':
        console.log("Saturday")
        break;
    case 'Sunday':
        console.log("Sunday")
        break;
    default:
        console.log("There is no such day")
        break;
}

