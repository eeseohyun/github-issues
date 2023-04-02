import Button from "./components/Button";
import styles from "./ListContainer.module.css";
import { useEffect, useState } from "react";

export default function ListContainer() {
	const [inputValue, setInputValue] = useState("is:issue is:open");

	useEffect(() => {
		console.log({ inputValue });
	}, [inputValue]);
	return (
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
		</div>
	);
}
