import { Children } from "react";
import styles from "./App.module.css";
import Button from "./components/Button";
import Header from "./Header.js";
import Tabs from "./components/Tabs";

function App() {
	return (
		<>
			<div className={styles.nav}>Nav</div>
			<Header />
			<div className={styles.listContainer}>
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
			<div className={styles.footer}>Footer</div>
		</>
	);
}

// 여러번 쓰이는 컴포넌트 - components/~

export default App;
