const express = require('express');
const app = express();
const cors = require('cors');

app.listen(8080, () => {
    console.log('listening on port http://localhost:8080' );
})

app.use(cors());

app.get('/blogs', (req, res) => {
    const blogs = [
        {
            id: 1,
            Name: "Dart Variables",
            Description: "How variables structured in Dart programming language"
        },
        {
            id: 2,
            Name: "Dart Functions",
            Description: "How functions are used in Dart programming language"
        },
        {
            id: 3,
            Name: "Dart OOP",
            Description: "How we code OOP in Dart programming language"
        },
        {
            id: 4,
            Name: "Dart Loops & Condition",
            Description: "How workflow works in Dart programming language"
        },
        {
            id: 5,
            Name: "Dart Tips",
            Description: "How to improve performance of applications in Dart programming language"
        }
    ];
    res.json(blogs);
    
})