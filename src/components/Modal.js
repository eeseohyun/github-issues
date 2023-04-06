import styles from "./Modal.module.css";
import cx from "clsx";
import { useState, useEffect } from "react";

export default function Modal({
	title,
	onClose,
	opened,
	placeholder,
	searchDataList,
	onClickCell,
}) {
	const [searchValue, setSearchValue] = useState();
	const [filteredData, setFilteredData] = useState(searchDataList);

	useEffect(() => {
		setFilteredData(searchDataList);
	}, [searchDataList]);

	return (
		<div className={cx(styles.modal, { [styles.opened]: opened })}>
			<div className={styles.header}>
				<span>Filter by {title}</span>
				<button onClick={onClose}>x</button>
			</div>
			<div className={styles.input}>
				<input
					placeholder={placeholder}
					value={searchValue}
					onChange={(e) => setSearchValue(e.target.value)}
				/>
			</div>
			{filteredData &&
				filteredData.map((data) => (
					<div
						className={styles.item}
						key={data.name}
						onClick={() => {
							const isLabel = title.toLowerCase() === "label";
							const paramKey = isLabel ? "labels" : title.toLowerCase();

							onClickCell({ [paramKey]: data.name });
						}}
						role="button"
					>
						{data.name}
					</div>
				))}
		</div>
	);
}
