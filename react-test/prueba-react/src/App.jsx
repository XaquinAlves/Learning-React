import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Navigator />
            <Carrousel />
        </>
    );
}

export default App;

export function Example() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="row justify-content-center justify-content-sm-center">
                <a
                    href="https://vite.dev"
                    target="_blank"
                    className=" col-1 col-sm-1"
                >
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a
                    href="https://react.dev"
                    target="_blank"
                    className="col-1 col-sm-1"
                >
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <h1 className="row justify-content-center justify-content-sm-center">
                Vite + React
            </h1>
            <div className="row justify-content-center justify-content-sm-center">
                <button
                    onClick={() => setCount((count) => count + 1)}
                    className="btn btn-primary col-2 col-sm-2"
                >
                    count is {count}
                </button>
            </div>
        </>
    );
}

export function Navigator() {
    return (
        <div className="row mb-3 mb-sm-3">
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

export function Carrousel() {
    return (
        <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                ></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="img/s1.jpg" class="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="img/s2.jpg" class="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="img/s3.jpg" class="d-block w-100" alt="..." />
                </div>
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
            >
                <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
            >
                <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}
