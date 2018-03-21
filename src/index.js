/* eslint no-unused-vars: 0 */
/* на  connect можно создать веб-приложение без всякого express при желании: */
const connect = require('connect');

const PORT = 4321;
const app = connect();
app
  .use((r, res, next) => {
    res.end('Hello, world!');
  })
  .listen(process.env.PORT || PORT, () => console.log('Я запущен'));
