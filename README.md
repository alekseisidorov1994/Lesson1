# Разбор первой лекции
### Работа с терминалом 
***
1.Команды для работы с терминалом<<<.  
`ls`-- list show - показать все папки директивы.  
`cd`-- change directory - перемещение по директории.  
Флаг  
./--указать явный путь к файлу в той же директории.  
../-- перемещение вверх по директориям.    
* `mkdir`-- make directory - создать папку.  
* `rm` --remove- удалить папку.  
Флаг  
-r --удалить рекурсивно.  
-f -- удалить вместе с директивой.  
2. NPM команды<<<.  
* `npm` init -инициальзация проектра.  
Флаг  
-y  - создаст package.json без опроса.
* `npm` install or i  - установка пакета.  
Флаг  
--save-dev - зависимости для разработки.  
--save - сохранить локально.  
-g - флаг глобальности.  

### Import and Export ES5/ES6
* ES5
> Для отправки модуля: module.exports = `Имя модуля`  
> Для приема модуля: const 'Имя модуля' = require('./путь к модулю')  
Необходимо указывать явный путь `./`(./ в той же директории). Если не указать явный путь к модулю, то JS будет искать файл в папке node__modules, полагая, что модуль там. Также в require можно не указывать расширение файла, JS автоматически сделает это за нас. Если файл будет не найден, то JS будет искать папку с таким именем.  
* ES6
> export default 'Имя файла'. Если хотим отпавить более 2-х, то : {`Имя файла`, `Имя файла`}  
> Import `Имя файла` from `'путь к файлу'`  
Если использовать в node.js import/export возникнет ошибка. Для того, чтобы ошибки не было необходим Babel. Babel преобразуем ES5 -> ES6.  
Загрузить babel: npm install -g @babel/core @babel/node @babel/cli @babel/preset-env @babel/plugin-transform-runtime @babel/runtime babel-loader  
Помимо установки пакетов создаем файл .babelrc {"presets": ["@babel/preset-env"],"plugins": ["@babel/plugin-transform-runtime"]}  
Используем команду babel-node `script.js` -(ваш файл со скриптом). Теперь ES6 работает для node.js.
### Webpack  
Webpack - инуструмент, позводяющий скомпилировать модули в единый js-файл. webpack -dev-server -собарнный за нас сервер, который может быть использовать для быстрой разработки приложения.  Скачать пакет для работы: `npm i webpack webpack-dev-server webpack-cli`. Далее в package.json в scripts копируем:  
"serve": "webpack-dev-server --mode development",  
"nodemon": "nodemon --exec babel-node server.js",  
"build": "webpack --mode production",  
"test": "mocha --require @babel/register"  
Это позволит нам использовать короткие команды, например: `npm run test` вместо `mocha --require @babel/register`.
### Nodemon  
Автоматически запускать скрипт каждый раз, как только произошли изменения. Запустить совместно с babel `npm run nodemon`.
### Система автомаческого тестирования  
Mocha - система запуска тестов. Chai - инструмент, проводящий тестирование. Необходимо скачать их локалько в проект и глобально.  
[Chai](https://www.chaijs.com/)  
[Mocha](https://mochajs.org)  
[настройка babel и webpack](https://gist.github.com/Aleksey-Danchin/4170890f2d50ebe6e1d6d8cf6a05a3f3)  
Пример теста в файле test.js  



