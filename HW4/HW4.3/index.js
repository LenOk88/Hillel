
    const Age = prompt("Year of your birth");
    let result = "";

    if (!Age) {
        alert (`You didn't enter your year of birth`);
    } else {
        result += `Your age: ${new Date().getFullYear() - Age}\n`;
    }

    const City = prompt("What city do you live in?");
    if(!City) {
        alert(`You didn't enter your city`);
    } else {
        switch (City.toLowerCase()) {
            case 'kyiv':
                result += `You live in the country of Ukraine\n`;
                break;
              case 'london':
                result += `You live in the country of England\n`;
                break;
            case 'washington':
                result += `You live in the country of USA\n`;
                break;
            default:
                result += `You live in the city of ${City}\n`;
                break;
             }
        }

    const Sport = prompt("Favorite sport");
    if(!Sport) {
        alert(`You didn't enter your sport`);
    } else {
        switch (Sport.toLowerCase()) {
            case 'football':
                result += `Do you want to be like Shevchenko?\n`;
                break;
            case 'boxing':
                result += `Do you want to be like Usik?\n`;
                break;
            case 'swimming':
                result += `Do you want to be like Klochkova?\n`;
                break;
            default:
                result += `Favorite sport: ${Sport}`;
                break;
        }

        alert(result)
      }

                
    // else if(City === 'London'){
    //     alert ('You live in the country of England');
    // }
    // else if(City === 'Washington'){
    //     alert ('You live in the country of USA');
    // }
    // else{
    //     alert (`You live in the city of ${City}`);
    // }
    // if(Sport === 'boxing'){
    //     alert('Круто! Хочешь стать как Усик?');
    // }
    // else if(Sport === 'football'){
    //     alert ('Круто! Хочешь стать как Шевченко?');
    // }
    // else if(Sport === 'tennis'){
    //     alert ('Круто! Хочешь стать как Зверев?');
    // }
    // else{
    //     alert (`Favorite sport: ${Sport}`);
    // }