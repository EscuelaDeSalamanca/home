import React,{ Component } from "react";
import './Home.css';

class Home extends Component<any, any>{

    public render(): JSX.Element {
        return (
            <div className="container">
                <div className="row">
                    <div className="col home-title">
                        <h1>Bienvenido</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm d-flex justify-content-center">
                        <i className="fas fa-microphone-alt home-icon fa-10x"></i>
                    </div>
                    <div className="col-sm home-statement">
                        <h3>Propósito</h3>
                        <span>
                            Buscamos ser un medio de comunicación objetivo, fiable y riguroso.
                        </span>
                        <br/>
                        <br/>
                        <h3>Valores</h3>
                        <ul>
                            <li className="home-list-item">
                                <h5>LIBERTAD</h5>
                                <span>Independencia personal para utilizar la lógica, la dialéctica y la retórica sin coacción de ningún tipo.</span>
                                <br></br>
                            </li>
                            <li className="home-list-item">
                                <h5>OBJETIVIDAD</h5>
                                <span>Lo expresado puede ser verdadero de forma universal y atemporal.</span>
                                <br></br>
                            </li>
                            <li className="home-list-item">
                                <h5>CREATIVIDAD</h5>
                                <span>Descubrir, desarrollar y/o diseñar nuevas ideas, formatos, programas o cosas demostrando innovación e imaginación.</span>
                                <br></br>
                            </li>
                            <li className="home-list-item">
                                <h5>COMPETITIVIDAD</h5>
                                <span>Tener rivalidad teniendo como objetivo ganar con honor.</span>
                                <br></br>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

}

export default Home;