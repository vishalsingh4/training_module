const express = require('express');
const router = express.Router();

const jsonData = [
    {
      id: 1,
      name: "Vishal Singh",
      age: 27,
    },
    {
      id: 2,
      name: "Test User",
      age: 28,
    },
];

// REST APIS
router.get('/', (req, res) => {
    res.json(jsonData)
});

router.get('/:id', (req, res) => {
    // check if exists =  Array.some
    const found = jsonData.some(item => item.id === parseInt(req.params.id));

    if(found) {
        const filteredData = jsonData.filter(item => item.id === parseInt(req.params.id));
        // return data
        res.json(filteredData);
    } else {
        res.status(400).json({msg: `Id ${req.params.id}`})
    }
});

router.post('/', (req, res) => {
    console.log(req.body);

    const data = {
        id: req.body.id,
        name: req.body.name,
        age: req.body.age
    }

    // we can put various checks of id, name and age as mandatory fields with 400 status
    jsonData.push(data);
    res.json(jsonData);
});

router.put('/:id', (req, res) => {
    // find member by id
    const found = jsonData.some(item => item.id === parseInt(req.params.id));

    if(found) {
        res.json({
            msg: 'Updated Successfully',
            data: jsonData
        })
    } else {
        res.status(400).json({
            msg: `Invalid update req for id: ${req.params.id}`
        })
    }
});

router.delete('/:id', (req, res) => {
    // find member by id
    const found = jsonData.some(item => item.id === parseInt(req.params.id));

    if(found) {
        // delete logic
        const filteredData = jsonData.filter(item => item.id !== parseInt(req.params.id));

        res.json({
            msg: 'Deleted Successfully',
            data: filteredData
        })
    } else {
        res.status(400).json({
            msg: `Invalid delete req for id: ${req.params.id}`
        })
    }
});

module.exports  = router;