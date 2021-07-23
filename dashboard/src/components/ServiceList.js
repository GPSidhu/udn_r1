import React, { useEffect, useState } from "react";
import UserService from "../services/user.service";
import styled from 'styled-components';

const ServiceRow = styled.li`
    display: flex;
`

const UserList = () => {
	const [allUsers, setAllUsers] = useState([]);
	const [selectedUser, setSelectedUser] = useState(null);
	const [selectedUserIndex, setSelectedUserIndex] = useState(-1);
	const [searchKey, setSearchKey] = useState("");

	const fetchUsers = () => {
		UserService.getAll()
			.then((res) => {
				setAllUsers(res.data);
				console.log(res.data);
			})
			.catch((e) => {
				console.error(e);
			});
	};
	useEffect(() => {
		fetchUsers();
		return () => {
			setAllUsers([]);
		};
		// eslint-disable-next-line
	}, []);

	return (
		<div className="list row">
			<div className="col-md-8">
				<div className="input-group mb-3">
					{/* <input
						type="text"
						placeholder="Search by name"
						value={searchKey}
						onChange={() => console.log(searchKey)}
					/> */}
					<div className="input-group-append ml-3">
						<button
							className="btn btn-outline-secondary"
							type="button"
							onClick={fetchUsers}
						>
							Refresh
						</button>
					</div>
				</div>
			</div>
			<div> 
                 {/* className="col-md-6"> */}
				<h4>Services List</h4>
				<ul className="list-group">
					{allUsers &&
						allUsers.map((user, index) => (
							<ServiceRow
								key={`user_${user.id}`}
								className={`list-group-item ${
									selectedUserIndex === index ? "active" : ""
								}`}
								// onClick={() => {
								// 	setSelectedUser(user);
								// 	setSelectedUserIndex(index);
								// }}
							>
								{`${user.name} - ${user.email} - ${user.phone}`}
							</ServiceRow>
						))}
				</ul>
			</div>
		</div>
	);
};

export default UserList;
