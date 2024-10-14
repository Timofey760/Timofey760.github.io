// Список клавиш, которые будут использоваться в игре
//глобальнае переменные


let listKeys = ['A', 'S', 'D', 'F', 'G'];
let currentKey = ''; // Переменная для текущей падающей клавиши
let score = 0; // Переменная для хранения очков игрока
let timer = 5; // Время, отведенное на каждую клавишу
let intervalId; // Идентификатор интервала для управления таймером




// Получаем элементы из HTML
const fallingKeyElement = document.getElementById('fallingKey');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');


function restartGame()
{
    listKeys = ['A', 'S', 'D', 'F', 'G'];
    currentKey = ''; // Переменная для текущей падающей клавиши
    score = 0; // Переменная для хранения очков игрока
    timer = 5; // Время, отведенное на каждую клавишу
    updateScore();
    document.getElementById('buttonStartGame').disabled=true;
    startGame();    
}

function updateScore(){
    scoreElement.textContent = score;
    
}
// Функция для запуска игры
function startGame() {
    // Проверяем, остались ли клавиши в списке
    if (listKeys.length === 0) {
        alert('Игра окончена! Ваши очки: ' + score);
        document.getElementById('buttonStartGame').disabled=false;
        return; // Завершаем игру, если клавиши закончились
    }
    // Выбираем случайную клавишу из списка
    currentKey = listKeys[Math.floor(Math.random() * listKeys.length)];
    console.log(currentKey);
    fallingKeyElement.textContent = currentKey; // Отображаем клавишу


    // Сбрасываем позицию падающей клавиши
    fallingKeyElement.style.top = '0px';
    fallingKeyElement.style.left = Math.random() * (300 - 50) + 'px'; // Случайная горизонтальная позиция




    timer = 10; // Сбрасываем таймер на 5 секунд
    timerElement.textContent = timer; // Обновляем отображение таймера




    // Запускаем интервал для отсчета времени
    intervalId = setInterval(() => {
        timer--; // Уменьшаем таймер на 1 каждую секунду
        timerElement.textContent = timer; // Обновляем отображение таймера




        // Проверяем, истекло ли время
        if (timer <= 0) {
            alert('Время вышло! Игра окончена.'); // Сообщаем игроку об окончании времени
            clearInterval(intervalId); // Останавливаем интервал
            document.getElementById('buttonStartGame').disabled=false;
            return; // Завершаем выполнение функции
            
        }




        // Перемещаем клавишу вниз на 5 пикселей
        fallingKeyElement.style.top = parseInt(fallingKeyElement.style.top) + 5 + 'px';
       console.log( fallingKeyElement.style.top)
        // Проверяем, не вышла ли клавиша за пределы контейнера
        if (parseInt(fallingKeyElement.style.top) > 500) {
            alert('Клавиша пропала! Игра окончена.'); // Сообщаем игроку об окончании игры
            clearInterval(intervalId); // Останавливаем интервал
            return; // Завершаем выполнение функции
        }
    }, 1000); // Интервал срабатывает каждую секунду
}


function OnKeyDown(event)
{
   
        // Проверяем, совпадает ли нажатая клавиша с текущей падающей клавишей
        if (event.key.toUpperCase() === currentKey) {
            score += timer; // Добавляем оставшееся время к очкам
           // scoreElement.textContent = score; // Обновляем отображение очков
              updateScore();
   
            // Убираем нажатую клавишу из списка, чтобы она больше не появлялась
            listKeys.splice(listKeys.indexOf(currentKey), 1);
           
            clearInterval(intervalId); // Останавливаем текущий интервал
            startGame(); // Запускаем новую игру с новой клавишей
        }
   
}


// Обработчик события нажатия клавиши на клавиатуре
document.addEventListener('keydown', OnKeyDown);


//круговой цикл
for (initializer; exit-condition; final-expression) {
    // код для выполнения
  }




// Запускаем игру при загрузке скрипта
//startGame();