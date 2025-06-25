const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});

import { LauncherAccueil } from "./LauncherAccueil.js";

const launcher = new LauncherAccueil();
launcher.main();

