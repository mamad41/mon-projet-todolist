import { useParams, Link } from 'react-router-dom'

function Detail({ taches }) {
    // 1. useParams récupère les paramètres de l'URL
    // Ici, on récupère "id" (car on va l'appeler :id dans la route tout à l'heure)
    const { id } = useParams();

    // 2. On cherche la tâche correspondante dans notre liste
    // Attention : l'id de l'URL est du texte, il faut le convertir en nombre avec parseInt
    const tache = taches.find((t) => t.id === parseInt(id));

    if (!tache) {
        return <h2>Tâche introuvable !</h2>;
    }

    return (
        <div>
            <h2>Détail de la tâche {id}</h2>
            <h3>{tache.titre}</h3>
            <p>{tache.description}</p>

            {/* Petit lien pour revenir en arrière */}
            <Link to="/">Retour à la liste</Link>
        </div>
    )
}

export default Detail