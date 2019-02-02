var push = document.getElementById('push');

function cZodiac(zodiac,zdate) { //конструктор
    this.zodiac = zodiac;
    this.zdate = zdate;
}

var aquarius = new cZodiac("Водолей","01-21"); //наши объекты
var pisces = new cZodiac("Рыбы","02-20");
var aries = new cZodiac("Овен","03-21");
var taurus = new cZodiac("Телец","04-21");
var gemini = new cZodiac("Близнецы","05-21");
var cancer = new cZodiac("Рак","06-22");
var leo = new cZodiac("Лев","07-23");
var virgo = new cZodiac("Дева","08-24");
var libra = new cZodiac("Весы","09-24");
var scorpio = new cZodiac("Скорпион","10-24");
var sagittarius = new cZodiac("Стрелец","11-23");
var capricorn = new cZodiac("Козерог","12-22");

var mZodiac = [aquarius,pisces,aries,taurus,gemini,cancer,leo,virgo,libra,scorpio,sagittarius,capricorn]; 
//массив объектов,для обращения в цикле

push.onclick = function(){
    document.getElementById('out').innerHTML = ""; //для повторных нажатий
    var input = document.getElementById('inp').value;
    var inpDate = "";
    var ans = "Козерог";
    for (var i = 5; i < input.length; i++){ //убираем год
        inpDate += input[i];
    }
    for ( i = 0; i < mZodiac.length; i++) {
        if(inpDate > mZodiac[i].zdate) {
            ans = mZodiac[i].zodiac;
            continue;
        } else break;
    }
    document.getElementById('out').insertAdjacentHTML('beforeEnd','Ваш знак: ' + ans);
}

/*var obj = {   //Объект для хранения связки названия и даты начала периода данного знака
    "Водолей" : "01-21",
    "Рыбы" : "02-20",
    "Овен" : "03-21",
    "Телец" : "04-21",
    "Близнецы" : "05-21",
    "Рак" : "06-22",
    "Лев" : "07-23",
    "Дева" : "08-24",
    "Весы" : "09-24",
    "Скорпион" : "10-24",
    "Стрелец" : "11-23",
    "Козерог" : "12-22"
}

push.onclick = function(){
    document.getElementById('out').innerHTML = ""; //для повторных нажатий
    var input = document.getElementById('inp').value;
    var inpDate = "";
    var ans = "Козерог";
    for (var i = 5; i < input.length; i++){ //убираем год
        inpDate += input[i];
    }
    for (var key in obj) {  
        if(inpDate > obj[key]) {
            ans = key;
            continue;
        } else break;
      }
    document.getElementById('out').insertAdjacentHTML('beforeEnd','Ваш знак: ' + ans);
}*/