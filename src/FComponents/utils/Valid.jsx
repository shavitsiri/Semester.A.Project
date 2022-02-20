


    export function validFirstName (firstName)  {// פונקציה לבדיקת השם הפרטי
        if(firstName.length < 2){
            return false;
        }
        for (let i = 0; i < firstName.length; i++) {
            if (!(firstName[i] >= 'A' && firstName[i] <= 'Z' || firstName[i] >= 'a' && firstName[i] <= 'z')) {
                return false;
            }
        }
        return true;
    }

    export function validLastName (lastName)  { // פונקציה לבדיקת השם משפחה
        if(lastName.length < 2){
            return false;
        }
        for (let i = 0; i < lastName.length; i++) {
            if (!(lastName[i] >= 'A' && lastName[i] <= 'Z' || lastName[i] >= 'a' && lastName[i] <= 'z')) {
                return false;
                }
            }
        return true;
    }

        
    export function  validUsername (userName) { // פונקציה לבדיקת היוזרניים
        if(userName.length < 2){
            return false;
        }
        for (let i = 0; i < userName.length; i++) {
            if (!(userName[i] >= '!' && userName[i] <= 'z')) {
                return false
            }
        }
        return true;
    }

    export function validateEmail (email) {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };

    
    // export function validMail (email) {// פונצקיה לבדיקת התאמות מייל
    //    if(email.length < 7){
    //        return false;
    //    }
    //     let i = email.length - 4;
    //     if (email[i] === '.' && email[i + 1] === 'c' && email[i + 2] === 'o' && email[i + 3] === 'm') {
    //         return true;
    //     }
    //     return false;
    // }

     export function validatePassword(password) {
        let user_password = password;
        var counterup = 0;
        var countchar = 0;
        var countnumber = 0;
        for (let i = 0; i < user_password.length; i++) {
            if (user_password[i] >= 'A' && user_password[i] <= 'Z') {
                counterup = 1;
            }
            var specialChars = "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=";
            for (let j = 0; j < specialChars.length && countchar !== 1; j++) {
                if (user_password[i] === specialChars[j]) {
                    countchar = 1;
                }
            }
            var numbers = "0123456789"
            for (let h = 0; h < numbers.length && countnumber !== 1; h++) {
                if (user_password[i] === numbers[h]) {
                    countnumber = 1;
                }
            }
            if (counterup === 1 && countchar === 1 && countnumber === 1) {
                return true;
            }
        }
        return false;
    }

    export function validCountry (country){
        if( country === '' || country === null){
            return false;
        }

    }

    export function validCity(city){
        if(city.length < 2){
            return false;
        }
        for (let i = 0; i < city.length; i++) {
            if (!(city[i] >= 'A' && city[i] <= 'Z' || city[i] >= 'a' && city[i] <= 'z')) {
                return false;
                }
            }
        return true;
    }

    export function validStreet(street) {
        if(street.length < 2){
            return false;
        }
        for (let i = 0; i < street.length; i++) {
            if (!(street[i] >= 'A' && street[i] <= 'Z' || street[i] >= 'a' && street[i] <= 'z')) {
                return false;
                }
            }
        return true;
    }

    export function validHouseNumber(houseNumber){
        if (houseNumber < 1){
            return false;
        }
        for (let i = 0; i < houseNumber.length; i++) {
            if (!(houseNumber[i] >= '0' && houseNumber[i] <= '9')) {
                return false;
                }
            }
        return true;
    }

    export function checkIfEmailExist(email){
        const localUsers = JSON.parse(localStorage.getItem(`Users`)) || [];  // מקבל את מערך כל המשתמשים מהלוקאל סרטוייג
        for(let i = 0; i < localUsers.length; i++){
            if(localUsers[i].email === email){
                return false;
            }
        }
        return true;
    }













  




    








