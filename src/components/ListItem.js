import styles from "./ListItem.module.css";

export default function ListItem({ onChangeCheckBox, checked, onClickTitle }) {
	return (
		<div className={styles.wrapper}>
			<input
				type="checkbox"
				className={styles.checkbox}
				value={checked}
				onChange={onChangeCheckBox}
			/>
			<div>
				<div role="button" onClick={onClickTitle} className={styles.title}>
					Issue Example
				</div>
				<div className={styles.subTitle}># Description</div>
			</div>
		</div>
	);
}
