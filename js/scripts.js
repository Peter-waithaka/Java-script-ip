function myFunction() {
    // var day_element = document.getElementById("day");
    // var day = day_element.value;
    // console.log(day)

    // var month_element = document.getElementById("month");
    // var month = month_element.value;
    // console.log(month)

    // var year_element = document.getElementById("year");
    // var year = year_element.value;
    // var year_arr =(year).toString().split('',2).map(Number);
    // var cc = Number(year_arr.join(''));
    // console.log(year)
    
  
    // console.log(year_arr)
    // console.log(cc)

    var currentDate = document.getElementById('datepicker').value;
    alert(currentDate);
    var n = currentDate.getDay()
    console.log(n);
    const rbs = document.querySelectorAll('input[name="gender"]');
    let selectedValue;
    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }
    console.log(selectedValue)

}

 
// Day_of_the_week (d) = ( ( (CC/4) -2*CC-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day )
// console.log(d)
function checkDayOfWeek(){
    day = calculateDay();
     checkGender();
     console.log("The function runs");//Test chackDayOfWeek function
}
     let daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
     let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
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
