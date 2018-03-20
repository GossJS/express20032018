/* eslint no-unused-vars: 0 */
const express = require('express');

const PORT = 4321;
const app = express(); // God-like singleton object Application

app
  .get('/', r => r.res.send('Вам привет от Express!'))
  .get('/hello', r => r.res.send('Привет, неизвестный!'))
  .get('/hello/:name', r => r.res.send(`Привет, ${r.params.name}!`))
  .use(r => r.res.set({
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'text/html; charset=utf-8',
  }).status(404).end('Тут пока ничего нет, сорри!'))
  .use((e, r, res, n) => r.res.status(500).end(`Ошибочка: ${e}`))
  .listen(process.env.PORT || PORT, () => console.log('Я запущен'));
