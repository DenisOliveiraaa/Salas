import { useNavigate } from "react-router-dom";

export const Navbar = () => {
    const Navigate = useNavigate();
    return (
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#!">Gestão de Salas</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav me-auto">

                    </ul>

                    <button type="button" className="btn btn-outline-secondary"
                        onClick={() => Navigate('/criar-sala')}>
                        Adicionar Sala
                    </button>

                </div>
            </div>
        </nav>
    )
}
