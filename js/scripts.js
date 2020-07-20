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

