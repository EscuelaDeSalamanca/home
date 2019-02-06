import React,{ Component } from "react";
import './Vision.css';

class Vision extends Component<any, any>{

    public render(): JSX.Element {
        return (
            <div className="container">
                <div className="row">
                    <div className="col vision-title">
                        <h1>Visión</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm d-flex justify-content-center">
                        <i className="fas fa-glasses vision-icon fa-10x"></i>
                    </div>
                    <div className="col-sm vision-statement">
                        <span>
                        Ser un medio de comunicación  exitoso por nuestro contenido.
                        </span>
                    </div>
                </div>
            </div>
        );
    }

}

export default Vision;