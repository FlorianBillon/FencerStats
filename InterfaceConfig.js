function InterfaceConfig() {
    // Création du conteneur principal
    const container = document.createElement('div');
    container.style.width = '400px';
    container.style.height = '250px';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.alignItems = 'center';
    container.style.justifyContent = 'center';

    // Champs texte avec bordures orange
    const champ1Label = document.createElement('label');
    champ1Label.textContent = 'Nom 1:';
    const champ1 = document.createElement('input');
    champ1.type = 'text';
    champ1.id = 'champ1';
    champ1.style.border = '2px solid orange';
    champ1.style.width = '150px';

    const champ2Label = document.createElement('label');
    champ2Label.textContent = 'Nom 2:';
    const champ2 = document.createElement('input');
    champ2.type = 'text';
    champ2.id = 'champ2';
    champ2.style.border = '2px solid orange';
    champ2.style.width = '150px';

    container.appendChild(champ1Label);
    container.appendChild(champ1);
    container.appendChild(champ2Label);
    container.appendChild(champ2);

    // Groupe de boutons radio pour le niveau
    const levelLabel = document.createElement('label');
    levelLabel.textContent = 'Level:';
    container.appendChild(levelLabel);

    const levels = ['Beginner', 'Intermediary', 'Pro'];
    levels.forEach(level => {
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.value = level;
        radio.name = 'level';

        const label = document.createElement('label');
        label.textContent = level;

        container.appendChild(radio);
        container.appendChild(label);
    });

    // Bouton de validation
    const valider = document.createElement('button');
    valider.textContent = 'Validate';
    valider.style.border = '2px solid blue';
    container.appendChild(valider);

    valider.addEventListener('click', () => {
        const champ1Texte = champ1.value.trim();
        const champ2Texte = champ2.value.trim();
        const selection = document.querySelector('input[name="level"]:checked');

        if (champ1Texte === '' || champ2Texte === '' || !selection) {
            alert('Please fill in all the fields and choose your level of analysis.');
        } else {
            const pNiveau = selection.value;
            const fenetreNiveau = window.open('', 'Fenêtre ' + pNiveau, 'width=500,height=500');

            if (pNiveau === 'Beginner') {
                console.log('Launching Beginner GUI...');
                // aGuiBeginner.createGUI(); // Remplace par la logique réelle
            } else if (pNiveau === 'Intermediary') {
                console.log('Launching Intermediary GUI...');
                // aGuiIntermediary.createGUI(); // Remplace par la logique réelle
            } else if (pNiveau === 'Pro') {
                console.log('Launching Pro GUI...');
                // aGuiPro.createGUI(champ1Texte, champ2Texte); // Remplace par la logique réelle
            }
        }
    });

    document.body.appendChild(container);
}

// Exécuter la fonction pour afficher l'interface
InterfaceConfig();
