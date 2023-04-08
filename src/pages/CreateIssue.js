import styles from "./CreateIssue.module.css";
import cx from "clsx";
import { useRef } from "react";
import { useForm } from "../hooks";
import Button from "../components/Button";
import TextField from "../components/TextField";

export default function CreateIssue() {
	const inputRef = useRef();
	const textareaRef = useRef();
	const { isSubmitting, inputValues, onChange, errors, handleSubmit } = useForm(
		{
			initValues: { title: "", body: "" },
			onSubmit: () => console.log("완료"),
			validate,
			refs: { title: inputRef, body: textareaRef },
		}
	);

	return (
		<div className={styles.container}>
			<div className={styles.avatar}></div>
			<div className={cx(styles.inputWrapper, styles.border)}>
				<form onSubmit={handleSubmit}>
					<TextField
						ref={inputRef}
						name="title"
						placeholder="Title"
						value={inputValues.title}
						onChange={onChange}
						error={errors.title}
					/>
					<TextField
						ref={textareaRef}
						type="textarea"
						name="body"
						placeholder="Leave a Comment"
						value={inputValues.body}
						onChange={onChange}
						error={errors.body}
					/>
					<div className={styles.buttonWrapper}>
						<Button
							type="submit"
							style={{
								fontSize: "14px",
								backgroundColor: "green",
								color: "white",
							}}
							disabled={isSubmitting}
						>
							{" "}
							Submit new issue{" "}
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
}

function validate(values) {
	let errors = {};
	if (values.title === "") {
		errors = { title: "타이틀은 필수 값입니다." };
	}

	return errors;
}
