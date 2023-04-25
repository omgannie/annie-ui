import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import { Button } from '../Button';


const OptionsList = (options, isSelected, handleSelection) => {
    options.map(({ optionValue, optionLabel }) => ( 
                        <div
                            value={optionValue}
                            className={isSelected && "selected"}
                            onClick={() => handleSelection}
                        >
                            {optionLabel}
                        </div>))
                    };

export const OptionPicker = ({ pickerType, selectionIdentifier, label, options, buttonText }) => {
    const [selected, setSelected] = useState("");
    const [isActive, setActive] = useState(false);

    const handleSelection = (e) => {
        setSelected(e.target.innerText);
        setActive(false);
    };

    return (
    <div className="wrapper">
        <label for={selectionIdentifier}>{label}</label>
        <div id={selectionIdentifier}
             className={pickerType}>
            {isActive ? 
                options.map(({ optionLabel }) => ( 
                    <div className={selected && "selected"}>
                        <span value={optionLabel} onClick={(e) => handleSelection(e)}>
                            {optionLabel}
                        </span>
                    </div>))
                    : <div onClick={() => setActive(true)}>{selected || "Select"}</div>}
        </div>
        <Button onClick={() => {}} label={buttonText} />
    </div>
)};

OptionPicker.propTypes = {
    selectionIdentifier: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    options: PropTypes.arrayOf({
        optionLabel: PropTypes.string.isRequired,
    }),
    buttonText: PropTypes.string,
    pickerType: PropTypes.oneOf(["dropdown", "radio"])
}

OptionPicker.defaultProps = {
    selectionIdentifier: "",
    label: "",
    options: [],
    pickerType: "dropdown"
};
