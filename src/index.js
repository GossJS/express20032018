/* eslint no-unused-vars: 0 */
const express = require('express');

const PORT = 4321;
const app = express(); // здесь мы просто показываем как вызываются функции middleware
// они вызываются экспрессом так же как DOM вызывает обработчики щелчков и прочих событий
app
  .use('/h', (...n) => {
    console.log('h!');
    console.log(n.length);
    n[1].send('h!');
  })
  .use((...n) => {
    console.log(`обработка запроса для ${n[0].url} ....`);
    n[2]();
  })
  .use((r, res, next) => {
    console.log('завершаем запрос');
    res.send('Спасибо за игру!');
  })

  .get('/hello', r => r.res.send('Привет, неизвестный!'))
  .get('/hello/:name', r => r.res.send(`Привет, ${r.params.name}!`))
  .use(r => r.res.set({
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'text/html; charset=utf-8',
  }).status(404).end('Тут пока ничего нет, сорри!'))
  .use((e, r, res, n) => r.res.status(500).end(`Ошибочка: ${e}`))
  /* видимо экспресс смотрит, какая из функций объявлена с 4-мя аргументами см. fakeapp.js */
  .listen(process.env.PORT || PORT, () => console.log('Я запущен'));
