const api = (() => {
    const BASEURL = "http://localhost:3000";

    function getAccessToken() {
        return import.meta.env.VITE_ACCESS_TOKEN;
    }

    async function _fetchWithAuth(url, options = {}) {
        return fetch(url, {
            ...options,
            headers: {
                ...options.headers,
                Authorization: `Bearer ${getAccessToken()}`,
            },
        });
    }

    async function getLowongan() {
        try {
            const response = await _fetchWithAuth(`${BASEURL}/posisi_magang`);
            if (response.ok) {
                const responseJson = await response.json();
                return responseJson.data
            } else {
                throw new Error('Failed to fetch Lowongan');
            }
        } catch (error) {
            console.log(error)
        }
    }

    return {
        getLowongan
    }
})();

export default api;