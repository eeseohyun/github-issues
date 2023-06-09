import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import axios from "axios";

export function useForm({
	validate,
	initialValues,
	refs,
	onSuccess, //성공 시 뭐할건데
	onErrors, //에러 시 어떡할건데
	onSubmit, //값이 전달될때는 어떤 함수/네트워크를 호출해야해?
}) {
	const [inputValues, setInputValues] = useState(initialValues);
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);

	function onChange(e) {
		const { name, value } = e.target;
		setInputValues({ ...inputValues, [name]: value });
	}

	async function handleSubmit(e) {
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
			try {
				const result = await onSubmit();
				onSuccess(result);
			} catch (e) {
				onErrors();
			}

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

async function getUserInfo() {
	const data = await axios.get("https://api.github.com/user", {
		headers: {
			Authorization: process.env.REACT_APP_GITHUB_TOKEN,
			"Content-Type": "application/json",
		},
	});
	return data.data;
}
export function useUser() {
	return useQuery(["userInfo"], () => getUserInfo(), { staleTime: "Infinity" });
}
