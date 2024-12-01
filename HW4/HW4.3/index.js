
    const age = prompt("Year of your birth");
    let result = "";

    if (!age) {
        alert (`You didn't enter your year of birth`);
    } else {
        result += `Your age: ${new Date().getFullYear() - age}\n`;
    }

    const city = prompt("What city do you live in?");
    if(!city) {
        alert(`You didn't enter your city`);
    } else {
        switch (city.toLowerCase()) {
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
                result += `You live in the city of ${city}\n`;
                break;
             }
        }

    const sport = prompt("Favorite sport");
    if(!sport) {
        alert(`You didn't enter your sport`);
    } else {
        switch (sport.toLowerCase()) {
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
                result += `Favorite sport: ${sport}`;
                break;
        }

        alert(result)
      }
