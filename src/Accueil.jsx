import { Link } from 'react-router-dom'

// Ce composant reçoit la liste des "taches" depuis App.jsx
function Accueil({ taches , supprimerTache}) {
    return (
        <div className="taches-list">
            <h2>Mes Tâches</h2>
            <ul>
                {taches.map((tache) => (
                    <li key={tache.id}>
                        {/* On affiche le titre */}
                        <span>{tache.titre}</span>
                        {/* On prépare le lien vers le détail (à faire plus tard) */}
                        <Link to={`/tache/${tache.id}`} style={{ marginLeft: '10px' }}>Voir détails</Link>
                        <button onClick={() => {supprimerTache(tache.id);}}>supprimer</button>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default Accueil