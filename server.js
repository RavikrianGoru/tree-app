const express = require('express');
const path = require('path');
const cors = require('cors');
const fs = require('fs');

const port = 3000;
const app = express();
app.use(cors());


// Middleware to serve static files (HTML, CSS, JS)
app.use(express.static('public'));
// Serve static files from the root directory (if you have other static files like index.html)
app.use(express.static(path.join(__dirname, '.')));
// Serve D3.js from node_modules
app.use('/d3', express.static(path.join(__dirname, '../node_modules/d3/dist')));





/*
const treeData = {
    "name": "BZID",
    "url": "https://example.com/root",
    "data": ["some data1", "some data2", "some data3"],
    "children": [
        {
            "name": "RIT1",
            "url": "https://example.com/child2",
            "data": ["some data1", "some data2", "some data3"],
            "children": [
                {
                    "name": "RIT2",
                    "url": "https://example.com/child2",
                    "data": ["some data1", "some data2", "some data3"],
                    "children": [
                        {
                            "name": "RIT1",
                            "url": "https://example.com/child2",
                            "data": ["some data1", "some data2", "some data3"],
                            "children": [
                                {
                                    "name": "DEV",
                                    "url": "https://example.com/child2",
                                    "data": ["some data1", "some data2", "some data3"],
                                    "children": [
                                        {
                                            "name": "Host1-Windows",
                                            "url": "https://example.com/grandchild1",
                                            "data": ["some data1", "some data2", "some data3"]
                                        }
                                    ]
                                },
                                {
                                    "name": "SIT",
                                    "url": "https://example.com/child1",
                                    "data": ["some data1", "some data2", "some data3"],
                                    "children": [
                                        {
                                            "name": "Host1-linux",
                                            "url": "https://example.com/grandchild1",
                                            "data": ["some data1", "some data2", "some data3"]
                                        },
                                        {
                                            "name": "DB1-MariaDB",
                                            "url": "https://example.com/grandchild2",
                                            "data": ["some data1", "some data2", "some data3"]
                                        }
                                    ]
                                },
                                {
                                    "name": "UAT",
                                    "url": "https://example.com/child2",
                                    "data": ["some data1", "some data2", "some data3"],
                                    "children": [
                                        {
                                            "name": "Host1-linux",
                                            "url": "https://example.com/grandchild1",
                                            "data": ["some data1", "some data2", "some data3"]
                                        },
                                        {
                                            "name": "DB1-MariaDB",
                                            "url": "https://example.com/grandchild2",
                                            "data": ["some data1", "some data2", "some data3"]
                                        },
                                        {
                                            "name": "Host2-linux",
                                            "url": "https://example.com/grandchild1",
                                            "data": ["some data1", "some data2", "some data3"]
                                        },
                                        {
                                            "name": "DB2-MariaDB",
                                            "url": "https://example.com/grandchild2",
                                            "data": ["some data1", "some data2", "some data3"]
                                        }
                                    ]
                                },
                                {
                                    "name": "PRD",
                                    "url": "https://example.com/child2",
                                    "data": ["some data1", "some data2", "some data3"],
                                    "children": [
                                        {
                                            "name": "Host1-linux",
                                            "url": "https://example.com/grandchild1",
                                            "data": ["some data1", "some data2", "some data3"]
                                        },
                                        {
                                            "name": "DB1-MariaDB",
                                            "url": "https://example.com/grandchild2",
                                            "data": ["some data1", "some data2", "some data3"]
                                        },
                                        {
                                            "name": "Host2-linux",
                                            "url": "https://example.com/grandchild1",
                                            "data": ["some data1", "some data2", "some data3"]
                                        },
                                        {
                                            "name": "DB2-MariaDB",
                                            "url": "https://example.com/grandchild2",
                                            "data": ["some data1", "some data2", "some data3"]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]

};


app.get('/api/treeData', (req, res) => {
    res.json(treeData);
});
*/
app.get('/api/treeData', (req, res) => {
    fs.readFile(path.join(__dirname, '/source/testStaticData.json'), 'utf8', (err, data) => {
        //console.log(`Reading data from source/testStaticData.json`);
        if (err) {
            console.error('Error reading the JSON file:', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.json(JSON.parse(data));
    });
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
