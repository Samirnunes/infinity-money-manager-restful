import React, { useState } from 'react';
import '../Home.css'
import '../../../App.css'
import { MdFilterAlt } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import {handleChange} from "../../ScreenUtils";

const FilterModal = ({ filterData, setFilterData, categorias}) => {
    // State to track changes in filter data
    const [tempFilterData, setTempFilterData] = useState({ ...filterData });
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }

    // Handler to update temporary filter data
    const handleFilterChange = (key, value) => {
        setTempFilterData(prevData => ({
            ...prevData,
            [key]: value
        }));
    };

    if(modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return (
        <>
            <div className="parent-btn-modal">
                <div onClick={toggleModal} className="btn-modal">
                    <p className="text">Filtrar</p>
                    <MdFilterAlt className="filter-icon"/>
                </div>
            </div>

            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <ul>
                            <li className="filter-list">
                                <input
                                    className="filter-input"
                                    type="date"
                                    value={tempFilterData.dataFiltro}
                                    onChange={(e) => handleFilterChange('dataFiltro', e.target.value)}
                                />
                            </li>
                            <li className="filter-list">
                                <select
                                    className="droplist"
                                    value={tempFilterData.categoria}
                                    onChange={(e) =>
                                        handleFilterChange('categoria', e.target.value)
                                    }
                                >
                                    {categorias.map((categoria) => (
                                        <option key={categoria} value={categoria}>
                                            {categoria}
                                        </option>
                                    ))}
                                </select>
                            </li>
                            <li className="filter-list">
                                <input
                                    className="filter-input"
                                    type="text"
                                    placeholder="Description"
                                    value={tempFilterData.descricao}
                                    onChange={(e) => {
                                        handleFilterChange('descricao', e.target.value);
                                    }}
                                />
                            </li>
                        </ul>
                        <div className="apply-filter">
                            <button
                                className="button"
                                onClick={() => {
                                    setFilterData(tempFilterData);
                                    toggleModal()
                                }}>Apply Filters
                            </button>
                        </div>
                    </div>
                    <IoCloseSharp className="close-modal" onClick={toggleModal}/>
                </div>
            )}
        </>
    );
};

export default FilterModal;
