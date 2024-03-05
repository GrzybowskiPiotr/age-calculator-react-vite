import styles from "./paragraph.module.css"

export function Paragraph({ date, desc }) {
	return (
		<p className={styles.par}>
			<span className={styles.date}>{date} </span>
			<span className={styles.desc}>{desc}</span>
		</p>
	);
}
