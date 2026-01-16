import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav style={{ padding: '10px', borderBottom: '1px solid #ccc', marginBottom: '20px' }}>
            {/* On utilise "to" au lieu de "href" */}
            <Link to="/" style={{ marginRight: '15px' }}>Accueil</Link>
            <Link to="/ajouter">Ajouter une tâche</Link>
        </nav>
    )
}

export default Navbar