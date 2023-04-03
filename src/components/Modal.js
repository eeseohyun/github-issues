import styles from "./Modal.module.css";
import cx from "clsx";

export default function Modal({ title, onClose, opened }) {
	return (
		<div className={cx(styles.modal, { [styles.opened]: opened })}>
			<div className={styles.header}>
				<span>{title}</span>
				<button onClick={onClose}>x</button>
			</div>
		</div>
	);
}
