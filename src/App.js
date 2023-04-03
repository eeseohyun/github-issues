import styles from "./App.module.css";
import Header from "./Header.js";
import ListContainer from "./ListContainer";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<div className={styles.nav}>Nav</div>
			<Header />
			<ListContainer />
			<Footer />
		</>
	);
}

// 여러번 쓰이는 컴포넌트 - components/~

export default App;
