import { Route, Routes } from "react-router-dom";
import Issue from "./pages/Issue";
import CreateIssue from "./pages/CreateIssue";
import Projects from "./pages/Projects";
import PullRequest from "./pages/PullRequest";
import Code from "./pages/Code";
import Security from "./pages/Security";
import Actions from "./pages/Actions";
import Nav from "./components/Nav";
import Header from "./Header";

function App() {
	//issue, new, projects, pulls, code, security, actions ...
	return (
		<>
			<Nav />
			<Header />
			<Routes>
				<Route path="/" element={<Issue />}></Route>
				<Route path="/issue" element={<Issue />}></Route>
				<Route path="/new" element={<CreateIssue />}></Route>
				<Route path="/projects" element={<Projects />}></Route>
				<Route path="/pulls" element={<PullRequest />}></Route>
				<Route path="/code" element={<Code />}></Route>
				<Route path="/security" element={<Security />}></Route>
				<Route path="/actions" element={<Actions />}></Route>
			</Routes>
		</>
	);
}

// 여러번 쓰이는 컴포넌트 - components/~

export default App;
