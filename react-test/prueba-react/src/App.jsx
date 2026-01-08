import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    return (
        <>
            <Navigator />
            <Carrousel />
            <Galeria />
            <Footer />
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
                    className=" col-1 col-md-1"
                >
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a
                    href="https://react.dev"
                    target="_blank"
                    className="col-1 col-md-1"
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
                    className="btn btn-primary col-2 col-md-2"
                >
                    count is {count}
                </button>
            </div>
            <hr className="bg-secondary" />
        </>
    );
}

export function Navigator() {
    return (
        <header className="row mb-3 mb-md-3 fs-5" id="inicio">
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
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Productos
                        </a>
                        <ul className="dropdown-menu bg-white fs-5">
                            <li>
                                <a
                                    className="dropdown-item text-black"
                                    href="#"
                                >
                                    Computadoras
                                </a>
                            </li>
                            <li>
                                <a
                                    className="dropdown-item text-black"
                                    href="#"
                                >
                                    Laptops
                                </a>
                            </li>
                            <li>
                                <a
                                    className="dropdown-item text-black"
                                    href="#"
                                >
                                    Smartphones
                                </a>
                            </li>
                            <li>
                                <a
                                    className="dropdown-item text-black"
                                    href="#"
                                >
                                    Drones
                                </a>
                            </li>
                            <li>
                                <a
                                    className="dropdown-item text-black"
                                    href="#"
                                >
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
        </header>
    );
}

export function Carrousel() {
    return (
        <div className="row mb-3 mb-md-3 mx-5 mx-md-5">
            <div
                id="carouselCabecera"
                className="carousel slide"
                data-bs-ride="carousel"
            >
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselCabecera"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselCabecera"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselCabecera"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src="src/img/s1.jpg"
                            class="d-block w-100"
                            alt="..."
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="src/img/s2.jpg"
                            class="d-block w-100"
                            alt="..."
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="src/img/s3.jpg"
                            class="d-block w-100"
                            alt="..."
                        />
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselCabecera"
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
                    data-bs-target="#carouselCabecera"
                    data-bs-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export function Card({ imgSrc, title, text }) {
    return (
        <div
            className="card"
            style={{ width: "26rem" }}
            key={`card-${title}`}
        >
            <img src={imgSrc} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title fs-1">{title}</h5>
                <p className="card-text text-secondary fw-light fs-4">{text}</p>
                <a href="#" className="btn btn-primary me-1 me-sm-1">
                    Comprar
                </a>
                <a href="#" className="btn btn-secondary">
                    Detalles
                </a>
            </div>
        </div>
    );
}

export function Galeria() {
    const loremIpsum =
        "Lore ipsum dolor sit amet, consectetur adipisicing elit.";
    const cards = [
        { imgSrc: "src/img/1.jpg", title: "iPhone", text: loremIpsum },
        { imgSrc: "src/img/2.jpg", title: "Mac", text: loremIpsum },
        { imgSrc: "src/img/3.jpg", title: "Canon", text: loremIpsum },
        { imgSrc: "src/img/4.jpg", title: "Apple Watch", text: loremIpsum },
        { imgSrc: "src/img/5.jpg", title: "Keyboard", text: loremIpsum },
        { imgSrc: "src/img/6.jpg", title: "iPad", text: loremIpsum },
        { imgSrc: "src/img/7.jpg", title: "Macbook", text: loremIpsum },
        { imgSrc: "src/img/8.jpg", title: "Cameras", text: loremIpsum },
    ];

    return (
        <div className="row ms-5 me-5">
            <h2
                className="title text-center mt-5 mt-sm-5"
                style={{ fontSize: "48px" }}
            >
                Galería
            </h2>
            <hr className="mb-5 mb-sm-5 bg-secondary" />
            {cards.map((card) => (
                <div className="col-3 col-md-3 mb-5 mb-md-5">
                    <Card {...card} />
                </div>
            ))}
        </div>
    );
}

export function Footer() {
    return (
        <footer className="row mx-5 mb-5 mb-sm-5">
            <hr className="mb-5 mb-sm-5" />
            <h4 className="text-secondary col-6 col-sm-6 mb-2 mb-sm-2 fw-light">
                IES Pazo da Merce
            </h4>
            <a href="#inicio" className="col-6 col-sm-6 text-end text-sm-end fs-5">
                Subir en página
            </a>
            <a href="#" className="link-primary col-1 col-md-1 ms-2 ms-md-2 fs-5">
                Acerca de
            </a>
            <a href="#" className="link-primary col-1 col-md-1 fs-5">
                Contacto
            </a>
        </footer>
    );
}
