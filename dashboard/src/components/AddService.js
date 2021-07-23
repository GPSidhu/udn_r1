import React, { useState } from "react";
import UserService from "../services/user.service";

const AddService = () => {
	const [serviceId, setServiceId] = useState("");
	const [submitted, setSubmitted] = useState(false);

	const registerService = () => {
		console.log("Registering service");
		const data = {
			service_id: serviceId,
		};
		UserService.create(data)
			.then((res) => {
				setServiceId(res.data.service_id);
				setSubmitted(true);
				console.log(res.data);
			})
			.catch((e) => {
				console.error(e);
			});
	};

	const newService = () => {
		setServiceId("");
		setSubmitted(false);
	};

	const onServiceIdChange = (e) => {
		setServiceId(e.target.value);
	};

	return (
		<div className="submit-form">
			{submitted && (
				<div>
					<h3>Service registered successfully</h3>
					<button className="btn btn-success" onClick={newService}>
						Service
					</button>
				</div>
			)}
			{!submitted && (
				<div className="d-flex justify-content-center flex-column">
					<div className="form-group mb-2">
						<label htmlFor="service">Service</label>
						<input
							type="text"
							className="form-control"
							id="service"
							required
							value={serviceId}
							onChange={onServiceIdChange}
							name="service"
						/>
					</div>

					<button
						onClick={registerService}
						className="btn btn-success mt-3"
					>
						Submit
					</button>
				</div>
			)}
		</div>
	);
};

export default AddService;
