function addEntry() {
    const dream = document.getElementById('dream').value;
    const synchronicity = document.getElementById('synchronicity').value;
    const date = new Date().toLocaleDateString('fr-FR', { 
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
    });

    const entryHTML = `
        <div class="entry">
            <h3>📅 ${date} • Phase lunaire : ${getMoonPhase()}</h3>
            <p>🌙 Rêve : ${dream}</p>
            <p>🔄 Synchronicité : ${synchronicity}</p>
        </div>
    `;

    document.getElementById('entries').insertAdjacentHTML('afterbegin', entryHTML);
    
    // Réinitialiser les champs
    document.getElementById('dream').value = '';
    document.getElementById('synchronicity').value = '';
}

// Fonction pour obtenir la phase lunaire (simplifiée)
function getMoonPhase() {
    const phases = ['Nouvelle Lune', 'Premier Croissant', 'Premier Quartier', 'Gibbeuse Croissante', 
                    'Pleine Lune', 'Gibbeuse Décroissante', 'Dernier Quartier', 'Dernier Croissant'];
    return phases[Math.floor(Math.random() * phases.length)]; // À remplacer par un calcul réel si besoin
}