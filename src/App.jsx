import {useState} from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Accueil from './Accueil'
import Detail from './Detail'
import Ajouter from './Ajouter'
import './App.css'

function App() {
    const [taches, setTaches] = useState ([
        {id:1,titre: "Travailler sur React", description: "Faire les briefs 1 et 2 "},
        {id:2,titre: "Continuer d'apprendre Js", description: "Faire des exercices pour mieux comprendre"},
        {id:3,titre: "Faire une pause", description: "Prendre 15 min de pauser pour ce changer les idéé est laisser infuser les connaissances nouvellemnt ascuise"},
        {id:4,titre: "Deposer tout mes travaux sur github", description: "Faire le depositpory sur github est partager les liens de chaque projets sur Simplon"}
    ]);
    const ajouterTache = (nouvelleTache) => {
        setTaches([...taches, nouvelleTache]);
    };
    const supprimerTache = (id) => {
        const nouvellesTaches = taches.filter(tache => tache.id !== id);
        setTaches(nouvellesTaches);
    };
    return (
        <div className="App">
            <Navbar />
            <h1>Ma To-Do List Multi-Pages</h1>

            {/* Le composant Routes agit comme un aiguilleur */}
            <Routes>
                <Route path="/" element={<Accueil taches={taches} supprimerTache={supprimerTache}/>}/>
                <Route path={"/tache/:id"} element={<Detail taches={taches}/>}/>
                <Route path="/ajouter" element={<Ajouter ajouterTache={ajouterTache}/>} />
                <Route path="*" element={<p>erreur 404</p>}/>
                <Route path="/" element={<p>Ceci sera la liste des tâches</p>} />
            </Routes>
        </div>
    )
}

export default App