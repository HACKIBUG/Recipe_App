import React from 'react';
import { FaCheckSquare, FaSquare } from 'react-icons/fa';

function IconCheckbox({ label, checked = false, onChange }) {
    const toggleCheckbox = () => {
        if (onChange) {
            onChange(!checked);
        }
    };

    return (
        <div onClick={toggleCheckbox} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            {checked ? <FaCheckSquare size={20} color="orangered" /> : <FaSquare size={20} color="#757575" />}
            {label && <span style={{ marginLeft: '8px' }}>{label}</span>}
        </div>
    );
}

export default IconCheckbox;
