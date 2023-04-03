import styles from "./ListItem.module.css";
import ListItemLayout from "./ListItemLayout";
import Badge from "./Badge";

export default function ListItem({
	onChangeCheckBox,
	checked,
	onClickTitle,
	badges,
}) {
	return (
		<ListItemLayout>
			<div>
				<div role="button" onClick={onClickTitle} className={styles.title}>
					Issue Example
					{badges &&
						badges.map((badgeProps, idx) => (
							<Badge key={idx} {...badgeProps} />
						))}
				</div>
				<div className={styles.subTitle}># Description</div>
			</div>
		</ListItemLayout>
	);
}
