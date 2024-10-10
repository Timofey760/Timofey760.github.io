function Init()
{
    console.log("cтраница загружена");
}


// Загадываем число от 1 до 100
const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const maxAttempts = 10; // Количество максимальных попыток
const previousGuesses = []; // Массив для хранения предыдущих попыток
const elementButtonRestart=document.getElementById('restart');
//const elementBody=document.getElementById('body');
//alert(elementBody);
//elementBody.style.color='red';

//alert(elementRestart);
//elementRestart.textContent='Start';
//elementButtonRestart.style.color='red';

function Popytka(){
const outputDiv = document.getElementById('output');
const inputField = document.getElementById('userInput');
const submitButton = document.getElementById('submitBtn');
const attemptsDiv = document.getElementById('attempts');


    const userInput = parseInt(inputField.value);
   
    // Проверка введенного числа
    if (isNaN(userInput) || userInput < 1 || userInput > 100) {
        outputDiv.textContent = "Пожалуйста, введите число от 1 до 100.";
        return;
    }


    attempts++;
    console.log(attempts);
    previousGuesses.push(userInput); // Сохраняем текущую попытку

    if (userInput === secretNumber) {
        outputDiv.textContent = `Поздравляю! Вы угадали число ${secretNumber} за ${attempts} ${attempts === 1 ? "попытку" : "попытки"}.`;
        inputField.disabled = true; // Блокируем ввод после выигрыша
    } else if (userInput < secretNumber) {
        outputDiv.textContent = "Ваше число меньше загаданного.";
    } else {
        outputDiv.textContent = "Ваше число больше загаданного.";
    }

 // Обновляем количество оставшихся попыток
 const remainingAttempts = maxAttempts - attempts;
    attemptsDiv.textContent = `Оставшиеся попытки: ${remainingAttempts}`;

    if (attempts === maxAttempts) {
        outputDiv.textContent = `Извините, вы использовали все ${maxAttempts} попыток. Загаданное число было ${secretNumber}.`;
        inputField.disabled = true; // Блокируем ввод после окончания попыток
    }

 // Выводим предыдущие попытки
 attemptsDiv.innerHTML += `<br>Ваши попытки: ${previousGuesses.join(', ')}`;

    inputField.value = ''; // Очищаем поле ввода
};

function Restart(){
    window.location.reload()
}

//Вариант 1
//elementButtonRestart.addEventListener("click",Restart);
/*
//Вариант 2. Анонимная функция
elementButtonRestart.addEventListener("click",function()
{
    window.location.reload()
});
*/
//Вариант 3. Стрелочная функция
elementButtonRestart.addEventListener("click",()=> {window.location.reload();});