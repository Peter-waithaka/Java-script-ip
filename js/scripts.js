  function getInput(){
  century = parseInt(document.getElementById("century").value);
  year = parseInt(document.getElementById("year").value);
  month = parseInt(document.getElementById("month").value);
  dayOfMonth = parseInt(document.getElementById("monthday").value);
}


  //    if((century == "") && (century <= 0) && (century >= 30)){
//   if(century == ""){
//     alert("Input the correct gender");
//   }else if ((year == "") && (year <= 0) && (year > 5000)){
//     return false;
//   }else if (year == ""){
//     alert("Input the correct year");
//   }else if ((month == "") && (month > 12) && (month <= 0)) {
//     return false;
//   }else if (month == ""){
//     alert("Input the correct month");
//   }else if((dayOfMonth == "") && (dayOfMonth > 31) && (dayOfMonth <= 0)){
//     return false;
//   }else if(dayOfMonth == ""){
//     alert("input the correct date");
//     return false;
//   }
// }


const dateValidation = date => {
  console.log('datefrom dateValidation', date);
  const dateFormat = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
  console.log('match', dateFormat.test(date));
  if (!dateFormat.test(date) || date === null || date === '' || date === undefined) {
      setDateIsInvalid(true)
      return false
  } else {
      setDateIsInvalid(false)
      return true
  }
}
//main caller func
 function checkDayOfWeek(){
     day = calculateDay();
      checkGender();
      console.log("The function runs");//Test chackDayOfWeek function
}
//arrays
let daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
//get selected radio button
function checkGender(){
  var gen = document.getElementsByName("rads");
  if(gen[0].checked == true){
      var gender = "male";
  }else if(gen[1].checked == true){
      var gender = "female";
  }else {
    console.log("pass");//Test the radio buttons
  }
    switch(gender){
        case gender = "male":
              switch(day){
                case (0 || -0):
                  document.getElementById("result").innerHTML = "The day is on a sunday." + "  " + "Your akan name is " + maleNames[0];
                break;
                case (1 || -1):
                  document.getElementById("result").innerHTML = "The day is on a monday." + " " + "Your akan name is " + maleNames[1];
                break;
                case (2 || -2):
                  document.getElementById("result").innerHTML = "The day is on a tuesday." + " " + "Your akan name is " + maleNames[2];
                break;
                case (3 || -3):
                  document.getElementById("result").innerHTML = "The day is on a wednesday." + " " + "Your akan name is "+ maleNames[3];
                break;
                case (4 || -4):
                  document.getElementById("result").innerHTML = "The day is on a thursday." + " " + "Your akan name is " + maleNames[4];
                break;
                case (5 || -5):
                  document.getElementById("result").innerHTML = "The day is on a friday." + " " + "Your akan name is " + maleNames[5];
                break;
                case (6 || -6):
                  document.getElementById("result").innerHTML = "The day is on a saturday." + " " + "Your akan name is " + maleNames[6];
                break;
                default:
                // console.console.log("Pass");//Test male case
              }
        break;
        case gender = "female":
                switch(day){
                  case 0 || -0:
                    document.getElementById("result").innerHTML = "The day is on a sunday." + "  " + "Your akan name is  akosua";
                  break;
                  case 1 || -1:
                    document.getElementById("result").innerHTML = "The day is on a monday." + " " + "Your akan name is adwoa ";
                  break;
                  case 2 || -2:
                    document.getElementById("result").innerHTML = "The day is on a tuesday." + " " + "Your akan name is abenaa";
                  break;
                  case 3 || -3:
                    document.getElementById("result").innerHTML = "The day is on a wednesday." + " " + "Your akan name is akua";
                  break;
                  case 4 || -4:
                    document.getElementById("result").innerHTML = "The day is on a thursday." + " " + "Your akan name is yaa";
                  break;
                  case 5 || -5:
                    document.getElementById("result").innerHTML = "The day is on a friday." + " " + "Your akan name is afua";
                  break;
                  case 6 || -6:
                    document.getElementById("result").innerHTML = "The day is on a saturday." + " " + "Your akan name is ama";
                  break;
              }
        break
        default:
        console.log("pass");//Test gender switch
    }
  }













