const Express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = Express();

const todos = [
    'Walk Zuko',
    'Wash dishes'
];

app.use(bodyParser.json());

app.get('/api/todo/', (req, res) => {
    res.json({ todos });
});

app.post('/api/todo/', (req, res) => {
    todos.push(req.body.todo);
    res.json({ todos });
});

app.use(Express.static(path.join(__dirname, '../public')));

app.listen(process.env.PORT || 4000, () => {
    console.log(`listening to port ${ process.env.PORT || 4000 }`);
});
