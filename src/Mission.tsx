import React,{ Component } from "react";
import './Mission.css';

class Mission extends Component<any, any>{

    public render(): JSX.Element {
        return (
            <div className="container">
                <div className="row">
                    <div className="col mission-title">
                        <h1>Misión</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm d-flex justify-content-center">
                        <i className="fas fa-user-shield mission-icon fa-10x"></i>
                    </div>
                    <div className="col-sm mission-statement">
                        <span>
                            Creemos firmemente que para el avance de la humanidad es necesario conocer la realidad, es por eso que estamos comprometidos a presentarle la información política y económica de forma objetiva y sin censura presentando así a nuestro publico los mejores reportajes, análisis, opiniones y debates sobre la realidad que nos rodea
                        </span>
                    </div>
                </div>
            </div>
        );
    }

}

export default Mission;