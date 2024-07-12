Написати програму "Фотобудка".

При відкритті або оновленні сторінки браузер повинен вмикати камеру. На сторінці повинно бути 3 елементи: video, button, canvas.
Video - це елемент який транслює камера в режимі live.
Button - кнопка "Capture", яка робить знімок з камери. Коли знімок зроблено надпис міняється на Retake.
Canvas - елемент, який показує captured image (при першому відкритті до натисканная на кнопку нічого не показує).

Використані API:

- MediaDevices API - для запиту доступу до камери користувача,
- MediaStream API - для відтворення відеопотоку з камери користувача,
- ImageCapture API - щоб захопити нерухоме зображення з live відеопотоку,
- Canvas API - використовуємо елемент canvas на веб-сторінці, де відображатиметься зроблене зображення, далі за допомогою метода канвасу отримуємо контекст 2D візуалізації полотна і використовуємо його для відмальовки захопленого captured image.
- Resize Observer API - для респонсіва (тобто моніторингу змін у розмірі контейнера відео та captured imge).