import { useState } from "react";

export function useForm({
	validate,
	initialValues,
	refs,
	onSuccess, //성공 시 뭐할건데
	onErrors, //에러 시 어떡할건데
	onSubmit, //값이 전달될때는 어떤 함수를 호출해야해?
}) {
	const [inputValues, setInputValues] = useState(initialValues);
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);

	function onChange(e) {
		const { name, value } = e.target;
		setInputValues({ ...inputValues, [name]: value });
	}

	function handleSubmit(e) {
		e.preventDefault();
		setIsSubmitting(true);

		const validateResult = validate(inputValues);
		setErrors(validateResult);

		const errorKeys = Object.keys(validateResult);
		if (errorKeys.length !== 0) {
			const key = errorKeys[0];
			alert(validateResult[key]);
			onErrors();
			refs[key].current.focus();
			setIsSubmitting(false);
			return;
		}
		if (errorKeys.length === 0) {
			onSubmit();
			return;
		}
	}
	return {
		inputValues,
		onChange,
		isSubmitting,
		errors,
		handleSubmit,
	};
}
