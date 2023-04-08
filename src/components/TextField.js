import styles from "./TextField.module.css";
import cx from "clsx";

export default function TextField({ type = "input", name, placeholder }) {
	return type === "input" ? (
		<input
			name={name}
			className={cx(styles.input, styles.border)}
			placeholder={placeholder}
		></input>
	) : (
		<textarea
			name={name}
			className={cx(styles.input, styles.textarea, styles.border)}
			placeholder={placeholder}
		></textarea>
	);
}
