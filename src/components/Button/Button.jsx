import React from 'react';
import styles from './styles/Button.module.scss';

const Button = ({ children, onClick }) => {
	return (
		<button onClick={() => onClick()} className={styles.button}>{children}</button>
	)};

export default Button;
