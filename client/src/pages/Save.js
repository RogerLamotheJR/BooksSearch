import React from "react";

function SaveCard(props){
    return(
        <div className="row">
            <div className="col s12">
                <div className="card purple darken-3">
                    <div className="card-content white-text">
                        <span className="card-title">{props.title}</span>
                        <div className="card-image">
                            <img src={props.image} alt = {props.title}/>
                        </div>
                        <p>{props.description}</p>
                    </div>

                    <div className="card-action">
                        
                        <a class="btn-floating btn-large waves-effect waves-light red" href="#"><i class="material-icons">delete</i></a>
                        
                        <a class="btn-floating btn-large waves-effect waves-light red" href="#"><i class="material-icons">visibility</i></a>
                    </div>
                </div>
            </div>
        </div>       
    )
};
export default SaveCard;