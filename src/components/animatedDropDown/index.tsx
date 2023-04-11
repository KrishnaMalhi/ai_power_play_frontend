import { Dropdown } from 'react-bootstrap';
import styles from './dropdown.module.scss';

interface IAnimatedDropdown {
    children: React.ReactNode,
    variant?: 'primary' | 'secondry';
    // onSelect?: () => void,
    selectedOption: String
}

const AnimatedDropdown: React.FC<IAnimatedDropdown> = ({ children, variant = "primary", selectedOption }) => {
    return (
        <Dropdown>
            <Dropdown.Toggle variant={variant} id="dropdown-basic">
                {selectedOption ? selectedOption : 'Select an option'}
            </Dropdown.Toggle>

            <Dropdown.Menu className={styles.dropdownMenu}>
                {children}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default AnimatedDropdown;