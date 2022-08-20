const axios = require("axios");
const apiUrl = "https://api.coincap.io/v2/assets";

const fetchCurrencies = async() => {
    const response = await axios.get(apiUrl);
    const apiData = await response.data;
    return apiData.data;
}

const fetchHistoryById = async(id) => {
    const response = await axios.get(`${apiUrl}/${id}/history?interval=d1`);
    const apiData = await response.data;
    return apiData.data;
}

module.exports = {
    fetchCurrencies,
    fetchHistoryById,
};