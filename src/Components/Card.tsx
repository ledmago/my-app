
import React from 'react';

interface CardPropsType {
    img?: string;
    name?: string;
    location?: string;
    id?: string;
}
function Card({ img, name, location, id }: CardPropsType) {
    return (
        <div className="card">
            <img src={img} className="card-img-left" alt="..." />
            <div className="card-body">
                <h6 className="card-title">#id : <span style={{ fontWeight: '400', color: '#888' }}>{id}</span></h6>
                <div className="row">
                    <h6 className="card-title">Name : <span style={{ fontWeight: '400', color: '#888' }}>{name}</span></h6>
                    <h6 className="card-title">Location : <span style={{ fontWeight: '400', color: '#888' }}>{location}</span></h6>
                </div>
            </div>
        </div>
    );
}

export default Card;

