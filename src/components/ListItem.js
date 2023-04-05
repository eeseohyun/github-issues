import styles from "./ListItem.module.css";
import ListItemLayout from "./ListItemLayout";
import Badge from "./Badge";

export default function ListItem({
	data,
	onChangeCheckBox,
	checked,
	onClickTitle,
	badges,
}) {
	return (
		<ListItemLayout>
			<div>
				<div role="button" onClick={onClickTitle} className={styles.title}>
					{data.title}
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
