import express from 'express'; // Si tu utilises ES Modules
// const express = require('express'); // Si tu utilises CommonJS

const app = express();

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Render nécessite `process.env.PORT`
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});

import { LauncherAccueil } from "./LauncherAccueil.js";

const launcher = new LauncherAccueil();
launcher.main();

