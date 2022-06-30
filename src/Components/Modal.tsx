
import React from 'react';

interface ModalPropsType {
    showModal: boolean;
    filter: string | null;
    setShowModal: any;
    setFilter: any;
}
function Modal({ showModal, setShowModal, setFilter, filter }: ModalPropsType) {
    if (!showModal)
        return <></>
    return (
        <div className="modal-container">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Filter</h5>
                    <button type="button" className="closeBtn" onClick={() => setShowModal(false)}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className='modal-body'>

                    <div className="form-check">
                        <label className="form-check-label" htmlFor="Rick">
                            Rick
                        </label>
                        <input className="form-check-input" type="radio" value={"Rick"} name="RickAndMorty" id="Rick" checked={filter == "Rick"} onChange={e => setFilter(e.target.value)} />

                    </div>
                    <div className="form-check">
                        <label className="form-check-label" htmlFor="Morty">
                            Morty
                        </label>
                        <input className="form-check-input" type="radio" name="RickAndMorty" value={"Morty"} id="Morty" checked={filter == "Morty"} onChange={e => setFilter(e.target.value)} />

                    </div>

                </div>
            </div>
        </div>
    );
}


export default Modal;

