import { useState, useEffect } from "react";
import styles from "./ListContainer.module.css";
import axios from "axios";

// 컴포넌트들
import Button from "./components/Button";
import ListItem from "./components/ListItem";
import ListItemLayout from "./components/ListItemLayout";
import ListFilter from "./components/ListFilter";
import OpenClosedFilters from "./components/OpenClosedFilters";
import Pagination from "./components/Pagination";

export default function ListContainer() {
	const [inputValue, setInputValue] = useState("is:issue is:open");
	const [list, setList] = useState([]);
	const [checked, setChecked] = useState(false);
	const [page, setPage] = useState(1);
	const [isOpenMode, setIsOpenMode] = useState(true);
	const [params, setParams] = useState();

	async function getData(params) {
		const { data } = await axios.get(
			"https://api.github.com/repos/facebook/react/issues",
			{ params: params }
		);
		setList(data.data);
	}

	useEffect(() => {
		getData({ page, state: isOpenMode ? "open" : "closed", ...params });
	}, [page, isOpenMode, params]);

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
				<OpenClosedFilters
					isOpenMode={isOpenMode}
					onClickMode={setIsOpenMode}
				/>
				<div className={styles.container}>
					<ListItemLayout className={styles.listFilter}>
						<ListFilter
							onChangeFilter={(params) => {
								setParams(params);
							}}
						/>
					</ListItemLayout>

					{list &&
						list.map((item) => (
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
