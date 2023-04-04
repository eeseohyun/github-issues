import styles from "./ListFilter.module.css";
import { useState } from "react";
import Modal from "./Modal";

export default function ListFilter({ onChangeFilter }) {
	return (
		<>
			<div className={styles.filterLists}>
				<ListFilterItem>Author</ListFilterItem>
				<ListFilterItem>Label</ListFilterItem>
				<ListFilterItem>Projects</ListFilterItem>
				<ListFilterItem>Milestones</ListFilterItem>
				<ListFilterItem>Assignee</ListFilterItem>
				<ListFilterItem>Sort</ListFilterItem>
			</div>
		</>
	);
}

function ListFilterItem({ onClick, children, onChangeFilter }) {
	const [showModal, setShowModal] = useState(false);
	return (
		<div className={styles.filterItem}>
			<span role="button" onClick={() => setShowModal(true)}>
				{children} ▾
			</span>
			<div className={styles.modalContainer}>
				<Modal
					opened={showModal}
					onClose={() => setShowModal(false)}
					placeholder="Filter labels"
					searchDataList={["bug", "Labels", "Apple"]}
					onClick={() => {
						//click된 정보를 통해 리스트 필터링
						onChangeFilter();
					}}
				/>
			</div>
		</div>
	);
}
