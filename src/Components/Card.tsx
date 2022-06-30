
import React, { useState } from 'react';
import config from "../config.json"
interface CardPropsType {
    img?: string;
    name?: string;
    location?: string;
    id?: string;
}

function Card({ img, name = "", location, id }: CardPropsType) {
    const shortName = name.length > 20 ? name.substring(0, 20) + "..." : name;
    const [imgSrc, setImgSrc] = useState<string | undefined>(img);
    return (
        <div className="card">
            <img src={imgSrc} className="card-img-left" onError={() => setImgSrc(config.defaultImg)} data-testid="avatarImg" />
            <div className="card-body">
                <h6 className="card-title">#id : <span style={{ fontWeight: '400', color: '#888' }}>{id}</span></h6>
                <div className="row">
                    <h6 className="card-title" data-testid="shortName">Name : <span style={{ fontWeight: '400', color: '#888' }}>{shortName}</span></h6>
                    <h6 className="card-title">Location : <span style={{ fontWeight: '400', color: '#888' }}>{location}</span></h6>
                </div>
            </div>
        </div>
    );
}

export default Card;

