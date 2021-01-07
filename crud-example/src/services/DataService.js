import http from '../http-common';

class DataService {
    getAll() {
        return http.get("/records");
    }

    get(id) {
        return http.get("/show/${id}");
    }

    create(data) {
        return http.post("/records", data);
    }

    update(id, data) {
        return http.put("/records/${id}", data);
    }

    delete(id) {
        return http.delete("/records/${id}");
    }   

    deleteAll() {
        return http.delete("/records");
    }

    findByName(name){
        return http.get("/records?name=${name}");
    }
}

export default new DataService();