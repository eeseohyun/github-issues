import styles from "./Tabs.module.css";
import cx from "clsx";
import { useState } from "react";
import { useLocation, Link } from "react-router-dom";

const tabList = [
	{ name: "Code", pathname: "/code" },
	{ name: "Issues", pathname: "/issue" },
	{ name: "Pull Requests", pathname: "/pulls" },
	{ name: "Actions", pathname: "/actions" },
	{ name: "Projects", pathname: "/projects" },
	{ name: "Security", pathname: "/security" },
];
export default function Tabs() {
	const { pathname } = useLocation();

	return (
		<ul className={styles.tabList}>
			{tabList.map((tab, idx) => (
				<Tab
					key={`${idx}`}
					item={tab}
					//기본 홈을 issue페이지로 설젇
					selected={(pathname === "/" ? "/issue" : pathname) === tab.pathname}
				/>
			))}
		</ul>
	);
}

function Tab({ item, selected, number }) {
	return (
		<li>
			{/* styles.selected가 true일 경우 변수 반환 */}
			<Link to={item.pathname} className={styles.link}>
				<button className={cx(styles.tab, { [styles.selected]: selected })}>
					<span>{item.name}</span>
					{number && <div className={styles.circle}>{number}</div>}
				</button>
			</Link>
		</li>
	);
}
