import React, { useState } from 'react';

function InterfaceAnalyse() {
    const [inputValue, setInputValue] = useState('');
    const [fileContent, setFileContent] = useState('');

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setFileContent(e.target.result);
            };
            reader.onerror = () => {
                alert("Erreur de lecture du fichier !");
            };
            reader.readAsText(file);
        }
    };

    return (
        <div style={{ width: '400px', height: '250px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <label>Nom :</label>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                style={{ border: '2px solid orange', width: '150px' }}
            />

            {/* Champ d'affichage de texte */}
            <div style={{ overflow: 'auto', width: '100%', maxHeight: '150px', border: '1px solid black', marginTop: '10px' }}>
                <textarea rows="10" cols="40" value={fileContent} readOnly />
            </div>

            {/* Bouton de validation */}
            <input type="file" onChange={handleFileUpload} style={{ marginTop: '10px' }} />
        </div>
    );
}

export default InterfaceAnalyse;
