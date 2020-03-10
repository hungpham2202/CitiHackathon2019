export const setToken = token => {
    try {
        const serializedToken = JSON.stringify(token);
        localStorage.setItem('token', serializedToken);
    } catch (err) {
        return undefined;
    }
};

export const getToken = () => {
    try {
        const serializedToken = JSON.parse(localStorage.getItem('token'));
        if (serializedToken === null) {
            return undefined;
        } else {
            return serializedToken;
        }
    } catch (err) {
        return undefined;
    }
};

export const clearToken = () => {
    try {
        localStorage.removeItem('token');
    } catch (err) {
        return undefined;
    }
};

export const setUserID = userID => {
    try {
        console.log(localStorage.setItem('userID', userID));
    } catch (err) {
        return undefined;
    }
};

export const getUserID = () => {
    try {
        const serializedUserID = localStorage.getItem('userID');
        console.log(serializedUserID);
        if (serializedUserID === null) {
            return undefined;
        } else {
            return serializedUserID;
        }
    } catch (err) {
        console.log(err);
        return undefined;
    }
};

export const clearUserID = () => {
    try {
        localStorage.removeItem('userID');
    } catch (err) {
        console.log(err);
        return undefined;
    }
}

export const setAdminStatus = () => {
    try {
        localStorage.setItem("AdminStatus", true)
    } catch (err) {
        return undefined;
    }
}

export const getAdminStatus = () => {
    try {
        const adminStatus = localStorage.getItem("AdminStatus")
        if (adminStatus) {
            return true
        } else {
            return false;
        }
    } catch (err) {
        return false;
    }
}

export const clearAdminStatus = () => {
    try {
        localStorage.removeItem("AdminStatus")
    } catch (err) {
        return undefined;
    }
}