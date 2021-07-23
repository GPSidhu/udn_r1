import http from "../http-common";

class UserService {
	getAll() {
		return http.get("/users");
	}

	get(id) {
		return http.get(`/users/${id}`);
	}

	create(data) {
        console.log("sending request: ")
        console.log(data);
		return http.post("/users", data);
	}

	update(id, data) {
		return http.put(`/users/${id}`, data);
	}

}

export default new UserService();
