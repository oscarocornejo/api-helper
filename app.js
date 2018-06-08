#!/usr/bin/env node
const express = require('express');
const path = require('path');
const FileSys = require(path.resolve(__dirname, 'src/classes/class.FileSys'));

const PORT = 5000;
const app = express();

Promise
    .resolve()
    .then(async () => {
        const apiFiles = await FileSys.ReadDir('src/api');
        // Parse file names however you please.
        // file names become endpoints
        const apiNames = apiFiles
            .map(file => {
                const name = path.parse(file).name.toLowerCase();
                return `/api/${name}`;
            });

        for(let i = 0; i < apiFiles.length; i++) {
            const { get, post } = require(path.resolve(__dirname, `src/api/${apiFiles[i]}`));
            app.post(apiNames[i], post);
            app.post(apiNames[i], get);
        }
        app.listen(PORT, () => {
            console.log(`Server started on port: ${PORT}`);
        });
    });
