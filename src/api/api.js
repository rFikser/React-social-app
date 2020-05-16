import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "7fd2002f-d278-4500-8dca-ac31cc02438c",
    },
});

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },

    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },

    updateStatus(status) {
        return instance.put(`profile/status/`, {status})
    }

};

export const headerAPI = {
    getAuth() {
        return instance.get(`auth/me`)
    }
}

export const usersAPI = {
    getUsers(currentPage = 2, pageSize = 10) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
    },

    follow(id) {
        return instance.post(`follow/${id}`)
    },

    unfollow(id) {
        return instance.delete(`follow/${id}`)
    },
};


export const loginAPI = {
    logIn(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout () {
        return instance.delete('auth/login')
    }


}