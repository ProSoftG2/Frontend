import axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:5173/api/v1"
});

export class AuthApiService {

    signUp(firstName,lastName,phoneNumber,dni,email,password,isSubscribedToNewsletter,isRecruiter) {
        return http.post('sign-up', {
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            dni: dni,
            email: email,
            password: password,
            isSubscribedToNewsletter: true,
            isRecruiter: isRecruiter
        })
    }

    signIn(email, password) {
        return http.post('sign-in', {
            email: email,
            password: password
        })
            .then(res => {
                if (res.data.token) {
                    localStorage.setItem('user', JSON.stringify(res.data));
                }
                return res.data;
            })
    }

    logout() {
        localStorage.removeItem('user');
    }

    getUserById(id) {
        // TODO: Do implementation
        return http.get(`${id}`);
    }
}