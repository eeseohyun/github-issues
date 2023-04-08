import styles from "./TextField.module.css";
import { forwardRef } from "react";
import cx from "clsx";

export default forwardRef(function TextField(
	{ type = "input", name, placeholder, onChange, value, error },
	ref
) {
	return type === "input" ? (
		<input
			name={name}
			ref={ref}
			onChange={onChange}
			value={value}
			className={cx(styles.input, styles.border, {
				[styles.error]: Boolean(error),
			})}
			placeholder={placeholder}
		></input>
	) : (
		<textarea
			name={name}
			ref={ref}
			onChange={onChange}
			value={value}
			className={cx(styles.input, styles.textarea, styles.border, {
				[styles.error]: Boolean(error),
			})}
			placeholder={placeholder}
		></textarea>
	);
});
