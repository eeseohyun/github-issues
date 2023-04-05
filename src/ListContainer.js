import Button from "./components/Button";
import styles from "./ListContainer.module.css";
import { useState, useEffect } from "react";
import ListItem from "./components/ListItem";
import ListItemLayout from "./components/ListItemLayout";
import ListFilter from "./components/ListFilter";
import cx from "clsx";
import Pagination from "./components/Pagination";
import axios from "axios";

export default function ListContainer() {
	const [inputValue, setInputValue] = useState("is:issue is:open");
	const [list, setList] = useState([]);
	const [checked, setChecked] = useState(false);
	const [page, setPage] = useState(1);

	async function getData(pageParam) {
		const { data } = await axios.get(
			"https://api.github.com/repos/facebook/react/issues",
			{ params: { page: pageParam } }
		);
		setList(data);
	}

	useEffect(() => {
		getData(page);
	}, [page]);
	// const data = getDate();
	// const openedData = data.filter((d)=>d.state === 'open')
	// const closedData = data.filter((d)=>d.state === 'closed')
	//const MAX_PAGE = getData().totalCount;
	//totalCount 100 / 30  3.3333 4page까지는 나옴
	return (
		<>
			<div className={styles.listContainer}>
				<div className={styles.topSection}>
					<input
						className={styles.input}
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
					/>
					<Button
						style={{
							fontSize: "14px",
							backgroundColor: "green",
							color: "white",
						}}
					>
						New Issue
					</Button>
				</div>
				<OpenClosedFilters />
				<div className={styles.container}>
					<ListItemLayout className={styles.listFilter}>
						<ListFilter
						// onChangeFilter={
						// 	(filteredData) => {}
						// 	//필터링된 요소에 맞게 데이터 불러오기
						// 	//const data = getData('필터링된 정보')
						// 	//setList(data)
						// }
						/>
					</ListItemLayout>

					{list.map((item) => (
						<ListItem
							key={item.id}
							data={item}
							checked={checked}
							onClickCheckBox={() => setChecked((checked) => !checked)}
						/>
					))}
				</div>
			</div>
			<div className={styles.paginationContainer}>
				<Pagination
					maxPage={10}
					currentPage={page}
					onClickPageButton={(number) => setPage(number)}
				/>
			</div>
		</>
	);
}

function OpenClosedFilter({ size, state, onClick, selected }) {
	return (
		<span
			role="button"
			onClick={onClick}
			className={cx(styles.textFilter, { [styles.selected]: selected })}
		>
			{size} {state}
		</span>
	);
}

function OpenClosedFilters({ data }) {
	const [isOpenMode, setIsOpenMode] = useState(true);
	const openModeDataSize = 1;
	const closeModeDataSize = 2;

	return (
		<>
			<OpenClosedFilter
				size={openModeDataSize}
				state="Open"
				selected={isOpenMode}
				onClick={() => setIsOpenMode(true)}
			/>
			<OpenClosedFilter
				size={closeModeDataSize}
				state="Close"
				selected={!isOpenMode}
				onClick={() => setIsOpenMode(false)}
			/>
		</>
	);
}
