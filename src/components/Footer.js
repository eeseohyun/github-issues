import styles from "./Footer.module.css";

const PRE_URL = "https://docs.github.com/en/site-policy";

const footerItems = [
	{ title: "Terms", link: `${PRE_URL}/github-terms/github-terms-of-service` },
	{
		title: "Privacy",
		link: `${PRE_URL}/privacy-policies/github-privacy-statement`,
	},
	{
		title: "Security",
		link: "https://github.com/security",
	},
	{
		title: "Status",
		link: "https://www.githubstatus.com/",
	},
	{
		title: "Docs",
		link: "https://docs.github.com/en",
	},
	{
		title: "Contact GitHub",
		link: "https://support.github.com/?tags=dotcom-footer",
	},
	{
		title: "Pricing",
		link: "https://github.com/pricing",
	},
	{
		title: "API",
		link: "https://docs.github.com/en",
	},
	{
		title: "Training",
		link: "https://github.com/services/",
	},
	{
		title: "Blog",
		link: "https://github.blog/",
	},
	{
		title: "About",
		link: "https://github.com/about",
	},
];

export default function Footer() {
	return (
		<>
			<ul className={styles.footer}>
				{footerItems.map((footerItem) => (
					<li key={footerItem.title} className={styles.item}>
						<a className={styles.link} href={footerItem.link}>
							{footerItem.title}
						</a>
					</li>
				))}
			</ul>
			<div className={styles.license}>
				&copy; {new Date().getFullYear()} GitHub, Inc.
			</div>
		</>
	);
}
