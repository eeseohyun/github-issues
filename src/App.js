import styles from "./App.module.css";
import Header from "./Header.js";
import ListContainer from "./ListContainer";

function App() {
	return (
		<>
			<div className={styles.nav}>Nav</div>
			<Header />
			<ListContainer />
			<div className={styles.footer}>Footer</div>
		</>
	);
}

// 여러번 쓰이는 컴포넌트 - components/~

export default App;
