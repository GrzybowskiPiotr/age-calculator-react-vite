import styles from "./input.module.css";

// eslint-disable-next-line react/prop-types
export function Input({ label, onChange, errorMsg, error, placeholder }) {
	return (
		<div className={styles.inputContainer}>
			<label
				htmlFor={label}
				className={`${
					error ? styles.error + " " + styles.label : styles.label
				}`}>
				{label}
			</label>
			<input
				name={label}
				type="number"
				placeholder={placeholder}
				onChange={(e) => onChange(e)}
				min="0"
				max={label === "Day" || label === "Month" ? "99" : "9999"}
				id={label}
				className={`${
					error ? styles.error + " " + styles.input : styles.input
				}`}
				required
			/>
			{error && <p className={styles.error}>{errorMsg}</p>}
		</div>
	);
}
