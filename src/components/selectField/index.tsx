import React from 'react';
import styles from './select.module.scss';

interface Option {
    value: string;
    label: string;
}

interface Props {
    options: Option[];
    label?: string;
    onSelect: (value: string) => void;
}

const SelectField: React.FC<Props> = ({ options, label, onSelect }) => {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onSelect(event.target.value);
    };

    return (
        <div className={styles.selectContainer}>
            {label && <div><label> {label}</label></div>}
            <select className={styles.selectField} onChange={handleChange}>
                <option key={"default"} value={"default"}>
                    Select Option
                </option>
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            <span className={styles.selectArrow}></span>
        </div >
    );
};

export default SelectField;
