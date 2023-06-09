import axios from "axios";
import { API_DOMAIN, getCookie } from '/config.js'

export default {
    // получить все потфолио
    GET_PORTFOLIO_FROM_API({ commit }, cardID) {
        return axios(`${API_DOMAIN}/api/v1/portfolioByCard/${cardID}?token=${getCookie('token')}`, {
            method: "GET",
        })
            .then((response) => {
                commit("SET_PORTFOLIO", response.data);
                return response;
            })
            .catch((error) => {
                console.log(error);
                return error;
            });
    },
    // обновить элемент порфолио
    UPDATE_PORTFOLIO_API({ commit }, portfolioItem) {

        const formData = new FormData();

        for (let key in portfolioItem) {
            formData.append(key, portfolioItem[key]);
        } 
        return axios(`${API_DOMAIN}/api/v1/portfolioUpdate/${portfolioItem.id}?token=${getCookie('token')}`, {
            method: "PATCH",
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((response) => {
                commit("UPDATE_PORTFOLIO", response.data);
                return response.data;
            })
            .catch((error) => {
                console.log(error);
                return error;
            });
    },
    // добавить елмент порфолио
    POST_PORTFOLIO_API({ commit }, portfolioItem) {
        const formData = new FormData();

        for (let key in portfolioItem) {
            formData.append(key, portfolioItem[key]);
        }

        return axios(`${API_DOMAIN}/api/v1/portfolio?token=${getCookie('token')}`, {
            method: "POST",
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((response) => {
                commit("POST_PORTFOLIO", response.data);
                return response.data;
            })
            .catch((error) => {
                console.log(error);
                return error;
            });
    },
    DELETE_PORTFOLIO_API({ commit }, portfolioID) {
        return axios(`${API_DOMAIN}/api/v1/portfolioDelete/${portfolioID}?token=${getCookie('token')}`, {
            method: "DELETE",
        })
            .then((response) => {
                commit("SET_DELETE_DATA", response.data);
                return response;
            })
            .catch((error) => {
                console.log(error);
                return error;
            });
    }
};