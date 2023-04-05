import styles from "./ListItem.module.css";
import ListItemLayout from "./ListItemLayout";
import Badge from "./Badge";
import dayjs from "dayjs";

export default function ListItem({
	data,
	onChangeCheckBox,
	checked,
	onClickTitle,
}) {
	const badges = data.labels;
	const state = data.state === "open" ? "opened" : "closed";
	const date = data.state === "open" ? data.created_at : data.closed_at;

	return (
		<ListItemLayout>
			<div>
				<div role="button" onClick={onClickTitle} className={styles.title}>
					{data.title}
					{badges.length > 0 &&
						badges.map((badgeProps, idx) => (
							<Badge key={idx} {...badgeProps} />
						))}
				</div>
				<div className={styles.subTitle}>
					#{data.number} {state} Description
				</div>
			</div>
		</ListItemLayout>
	);
}
