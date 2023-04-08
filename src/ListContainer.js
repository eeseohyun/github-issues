import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
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
	//const [params, setParams] = useState();

	const [searchParams, setSearchParams] = useSearchParams();
	const page = parseInt(searchParams.get("page") ?? "1", 10);
	const maxPage = 10;
	const state = searchParams.get("state");

	async function getData(params) {
		const { data } = await axios.get(
			"https://api.github.com/repos/facebook/react/issues",
			{ params: params }
		);
		setList(data.data);
	}

	useEffect(() => {
		getData(searchParams);
	}, [searchParams]);

	return (
		<>
			<div className={styles.listContainer}>
				<div className={styles.topSection}>
					<input
						className={styles.input}
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
					/>
					<Link to="/new" className={styles.link}>
						<Button
							style={{
								fontSize: "14px",
								backgroundColor: "green",
								color: "white",
							}}
						>
							New Issue
						</Button>
					</Link>
				</div>
				<OpenClosedFilters
					isOpenMode={state !== "closed"} //아무런 값도 들어오지 않는 경우도 포함 !== 사용
					onClickMode={(state) => setSearchParams({ state })}
				/>
				<div className={styles.container}>
					<ListItemLayout className={styles.listFilter}>
						<ListFilter
							onChangeFilter={(params) => {
								setSearchParams(params);
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
					maxPage={maxPage}
					currentPage={page}
					onClickPageButton={(pageNumber) =>
						setSearchParams({ page: pageNumber })
					}
				/>
			</div>
		</>
	);
}
