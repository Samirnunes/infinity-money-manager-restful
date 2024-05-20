import React, { useEffect, useRef, useState } from 'react';
import { FaCartShopping } from "react-icons/fa6";

const TransactionCard = ({tipo, descricao, valor}) => {
    return (
        <section className="transaction_card">
            <div style={{display: "flex"}}>
                <FaCartShopping className="icon"/>
                <div>
                    <p className="text">{tipo}</p>
                    <p className="subtext">{descricao}</p>
                </div>
            </div>
            <p className="text">R$ {valor}</p>
        </section>
    );
};

export default TransactionCard;
