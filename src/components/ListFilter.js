import styles from "./ListFilter.module.css";
import { useState } from "react";
import Modal from "./Modal";

export default function ListFilter({ onChangeFilter }) {
	//어떤 리스트필터창을 클릭하였는지
	const [showModal, setShowModal] = useState("");
	const filters = [
		"Author",
		"Label",
		"Projects",
		"Milestones",
		"Assignee",
		"Sort",
	];
	return (
		<>
			<div className={styles.filterLists}>
				{filters.map((filter) => (
					<ListFilterItem
						key={filter}
						searchDataList={[]}
						onClick={() => setShowModal(filter)}
						onClose={() => setShowModal()}
						showModal={showModal === filter}
					>
						Author
					</ListFilterItem>
				))}
			</div>
		</>
	);
}

function ListFilterItem({
	children,
	onChangeFilter,
	searchDataList,
	placeholder,
	showModal,
	onClick,
	onClose,
}) {
	const [list, setList] = useState([]);
	return (
		<div className={styles.filterItem}>
			<span role="button" onClick={onClick}>
				{children} ▾
			</span>
			<div className={styles.modalContainer}>
				<Modal
					title={children}
					opened={showModal}
					onClose={onClose}
					placeholder={placeholder}
					searchDataList={searchDataList}
					onClick={(cellInfo) => {
						//click된 정보를 통해 리스트 필터링
						onChangeFilter();
					}}
				/>
			</div>
		</div>
	);
}
