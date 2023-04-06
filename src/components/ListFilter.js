import styles from "./ListFilter.module.css";
import { useEffect, useState } from "react";
import Modal from "./Modal";
import axios from "axios";

export default function ListFilter({ onChangeFilter }) {
	//어떤 리스트필터창을 클릭하였는지
	const [showModal, setShowModal] = useState("");
	const [list, setList] = useState();
	const filters = ["Label", "Milestone", "Assignee"];

	async function getData(apiPath) {
		const data = await axios.get(
			`https://api.github.com/repos/facebook/react/${apiPath}`
		);

		let result = [];
		switch (apiPath) {
			case "assignes":
				result = data.data.map((d) => ({
					name: d.login,
				}));
				break;
			case "milestones":
				result = data.data.map((d) => ({
					name: d.title,
				}));
				break;
			case "labels":
			default:
				result = data.data;
		}
	}

	useEffect(() => {
		if (showModal) {
			const apiPath = `${showModal.toLowerCase()}s`;
			getData(apiPath);
		}
	}, [showModal]);
	return (
		<>
			<div className={styles.filterLists}>
				{filters &&
					filters.map((filter) => (
						<ListFilterItem
							key={filter}
							searchDataList={list}
							onClick={() => setShowModal(filter)}
							onClose={() => setShowModal()}
							showModal={showModal === filter}
							onChangeFilter={onChangeFilter}
						>
							{filter}
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
	const [list, setList] = useState(searchDataList);

	useEffect(() => {
		setList(searchDataList);
	}, [searchDataList]);

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
					searchDataList={list}
					onClick={(params) => {
						//click된 정보를 통해 리스트 필터링
						onChangeFilter(params);
					}}
				/>
			</div>
		</div>
	);
}
