let nmMale = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

let nmFemale = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
 

function myfunction() {
    event.preventDefault();
    
    let gender = document.getElementById('gender');
    let genderVal = gender.options[gender.selectedIndex].value;
    let result = document.getElementById('result');
    
    let date = document.getElementById('date').value;
    
    let d = new Date(date);

    let weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    let n = weekday[d.getDay()];
    
    if(genderVal == "male"){
        if(n == "Sunday"){ 
            result.innerHTML = " Born On " + n + ',' + " Your Akan Name Is " + nmMale[0];
        }
        else if(n == "Monday"){ 
            result.innerHTML = " Born On " + n + ',' + " Your Akan Name Is " + nmMale[1];
        }
        else if(n == "Tuesday"){ 
            result.innerHTML = " Born On " + n + ',' + " Your Akan Name Is " + nmMale[2];
        }
        else if(n == "Wednesday"){ 
            result.innerHTML = " Born On " + n + ',' + " Your Akan Name Is " + nmMale[3];
        }
        else if(n == "Thursday"){ 
            result.innerHTML = " Born On " + n + ',' + " Your Akan Name Is " + nmMale[4];
        }
        else if(n == "Friday"){ 
            result.innerHTML = " Born On " + n + ',' + " Your Akan Name Is " + nmMale[5];
        }
        else if(n == "Saturday"){ 
            result.innerHTML = " Born On " + n + ',' + " Your Akan Name Is " + nmMale[6];
        }
    }

    if(genderVal == "female"){
        if(n == "Sunday"){ 
            result.innerHTML = " Born On " + n + ',' + " Your Akan Name Is " + nmFemale[0];
        }
        else if(n == "Monday"){ 
            result.innerHTML = " Born On " + n + ',' + " Your Akan Name Is " + nmFemale[1];
        }
        else if(n == "Tuesday"){ 
            result.innerHTML = " Born On " + n + ',' + " Your Akan Name Is " + nmFemale[2];
        }
        else if(n == "Wednesday"){ 
            result.innerHTML = " Born On " + n + ',' + " Your Akan Name Is " + nmFemale[3];
        }
        else if(n == "Thursday"){ 
            result.innerHTML = " Born On " + n + ',' + " Your Akan Name Is " + nmFemale[4];
        }
        else if(n == "Friday"){ 
            result.innerHTML = " Born On " + n + ',' + " Your Akan Name Is " + nmFemale[5];
        }
        else if(n == "Saturday"){ 
            result.innerHTML = " Born On " + n + ',' + " Your Akan Name Is " + nmFemale[6];
        }
    }
}
 