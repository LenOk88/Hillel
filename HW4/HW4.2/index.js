let nut = prompt("Введите трехзначное число");
    switch (true) {
      case nut === null:
        alert('ви скасували');
        break;
        case isNaN(nut) || nut > 999 || nut <=99:
            alert("Вы ввели не трехзначное число");
            break;
        case nut[0] === nut[1] && nut[1] === nut[2]:
            alert("В этом числе все цифры одинаковые.");
            break;
        case nut[1] === nut[2]:
            alert("В этом числе вторая и третья цифра одинаковые.");
            break;
        case nut[0] === nut[1]:
            alert("В этом числе первая и вторая цифра одинаковые.");
            break;
        case nut[0] === nut[2]:
            alert("В этом числе первая и третья цифра одинаковые.");
            break;
        default:
            alert("В этом числе одинаковых цифр нет.");
            break;
        }