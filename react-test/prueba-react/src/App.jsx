import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Navigator />
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    );
}

export default App;

export function Navigator() {
    return (
        <div className="row">
            <nav
                className="navbar navbar-expand-lg bg-dark px-5 justify-content-between"
                data-bs-theme="dark"
            >
                <ul className="navbar-nav text-white">
                    <a className="navbar-brand ms-lg-3 text-white" href="#">
                        Logotipo
                    </a>
                    <li className="nav-item">
                        <a
                            className="nav-link active"
                            aria-current="page"
                            href="#"
                        >
                            Inicio
                        </a>
                    </li>
                    <li className="nav-item dropdown-item">
                        <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Productos
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <a className="dropdown-item" href="#">
                                    Computadoras
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Laptops
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Smartphones
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Drones
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Accesorios
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Contacto
                        </a>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Buscar"
                        aria-label="Search"
                    />
                    <button className="btn btn-primary" type="submit">
                        Buscar
                    </button>
                </form>
            </nav>
        </div>
    );
}
