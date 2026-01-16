import {useState} from "react";
import { useNavigate } from 'react-router-dom';

function Ajouter({ajouterTache}) {
    const navigate = useNavigate();
    const [titre,setTitre] = useState ("");
    const [description,setDescription] = useState ("");
    const handleSubmit = (e) => {
        e.preventDefault();
        ajouterTache({
            id: Date.now(),
            titre: titre,
            description: description
        });
        navigate("/");

    };
    return (
        <div>
            <h2>Ajouter une tâche</h2>
            <form onSubmit={handleSubmit}><input
                type="text"
                value={titre}
                onChange={(e) => setTitre(e.target.value)}
                placeholder="Titre de la tâche"
            /> <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description de la tache"
            />
                <button type="submit">Ajouter</button></form>
        </div>
    )
}
export default Ajouter;