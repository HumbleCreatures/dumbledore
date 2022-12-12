import * as express from 'express';

type Todo = {
    id: string;
    title: string;
    description: string;
    created: Date;
}


function randomId(): string { 
    return Math.floor(Math.random() * (10000 - 1 + 1) + 1).toString();
  }

  let toDos: Todo[] = [];

const router = express.Router();

router.get('', (req, res) => {
    res.send({ message: 'Welcome to //TODO' });
});

router.get('/all', (req, res) => {
    res.json(toDos);
});

router.post('/add', (req, res) => {
    const newTodo: Todo = {
        id: randomId(),
        title: req.body.title,
        description: req.body.description,
        created: new Date()
    };

    toDos.push(newTodo);

    res.json(newTodo);
});

router.post('/delete', (req, res) => {
    if(!req.body.id) {
        res.send(400).json({messge: "Need an id to remove a todo."});
    }
    toDos = toDos.filter(todo => todo.id !== req.body.id)
});


export default router;