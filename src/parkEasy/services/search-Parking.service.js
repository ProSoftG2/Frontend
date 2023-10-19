import http from "../../shared/services/http-search.js";

export class SearchParkingService {
    getALL() {
        return http.get('/parkingSpaces');
    }

    getDetails(id) {
        return http.get(`/parkingSpaces/${id}`);
    }
}
