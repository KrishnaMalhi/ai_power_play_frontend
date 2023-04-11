import React, { useState } from "react";
import styles from "./textarea.module.scss";

interface Props {
    label?: string;
    onChange: (text: String) => void
}

const TextareaField: React.FC<Props> = ({ label, onChange }) => {
    const [value, setValue] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(event.target.value);
        onChange(event.target.value)
    };

    return (
        <div className={styles["textarea-container"]}>
            <textarea
                className={styles["textarea-input"]}
                value={value}
                onChange={handleChange}
                rows={3}
                placeholder="write here"
            />
            {label && <label>{label}</label>}
        </div>
    );
};

export default TextareaField;
