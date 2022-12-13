import * as express from 'express';

type Case = {
    id: string;
    title: string;
    description: string;
    closed: boolean;
    created: Date;
}


function randomId(): string { 
    return Math.floor(Math.random() * (10000 - 1 + 1) + 1).toString();
}

const cases: Case[] = [{ 
    id: '123',
    title: 'title',
    description: 'description',
    created: new Date(),
    closed: false,
}];

const router = express.Router();

router.get('', (req, res) => {
    res.send({ message: 'Welcome to /case' });
});

router.get('/all', (req, res) => {
    res.json(cases);
});

router.post('/add', (req, res) => {
    const newCase: Case = {
        id: randomId(),
        title: req.body.title,
        description: req.body.description,
        created: new Date(),
        closed: false
    };

    cases.push(newCase);
    res.json(newCase);
});

router.post('/close', (req, res) => {
    if(!req.body.id) {
        res.send(400).json({messge: "Need an id to cose a case."});
    }
    const caseToClose = cases.find(todo => todo.id !== req.body.id);
    caseToClose.closed = true;
    
    return caseToClose;
});

export default router;