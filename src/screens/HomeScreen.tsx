import { FC } from 'react';
import { Generator } from '@app/modules/inputOutputGenerator';
import styles from './HomeScreen.module.scss'

export const HomeScreen: FC = () => {
    return (
        <div className={styles['home-container']}>
            <Generator />
        </div>
    )
}