import axios from "axios";

const instanceAuth = axios.create({
    baseURL: 'https://trycode.pw/c/93GQM.json'
});

const instanceJournal = axios.create({
    baseURL: 'https://trycode.pw/c/BI886.json'
});


export const authAPI = {
    login() {
        return instanceAuth.get()
    }
};

export const journalAPI = {
    get() {
        return instanceJournal.get()
    }
};


