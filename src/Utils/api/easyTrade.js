const basePath = process.env.EASY_TRADE_API_URL

export const login = async (email, password) => {
    const url = `${basePath}/token`;
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    });
    if (!response.ok){
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }
    return await response.json();
}

export const createUser = async (obj) => {
    const url = `${basePath}/user`;
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            first_name: obj.firstName,
            last_name: obj.lastName,
            email: obj.email,
            password: obj.password,
            date_of_birth: obj.dateOfBirth,
            phone_number: obj.phoneNumber,
            country_of_birth: obj.countryOfBirth,
            city: obj.city,
            address: obj.address,
            zip_code: obj.zipCode,
            gender: obj.gender,
            type: obj.type
        })
    });
    if (!response.ok){
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }
    return await response.json();
}

export const editUser = async (token, obj) => {
    const url = `${basePath}/user`;
    const response = await fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
            first_name: obj.firstName,
            last_name: obj.lastName,
            email: obj.email,
            password: obj.password,
            date_of_birth: obj.dateOfBirth,
            phone_number: obj.phoneNumber,
            country_of_birth: obj.countryOfBirth,
            city: obj.city,
            address: obj.address,
            zip_code: obj.zipCode,
            gender: obj.gender,
            type: obj.type
        })
    });
    if (!response.ok){
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }
    return await response.json();
}

export const getListCountry = async (token) => {
    const url = `${basePath}/catalog/country`;
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });
    if (!response.ok){
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }
    return await response.json();
}

export const getListState = async (token, countryId) => {
    const url = `${basePath}/catalog/state?country=${countryId}`;
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });
    if (!response.ok){
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }
    return await response.json();
}

export const getListCity = async (token, stateId) => {
    const url = `${basePath}/catalog/city?state=${stateId}`;
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });
    if (!response.ok){
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }
    return await response.json();
}

export const getListDocument = async (token) => {
    const url = `${basePath}/catalog/document`;
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });
    if (!response.ok){
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }
    return await response.json();
}

export const getListGender = async (token) => {
    const url = `${basePath}/catalog/gender`;
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });
    if (!response.ok){
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }
    return await response.json();
}

export const getListUserType = async (token) => {
    const url = `${basePath}/catalog/usertype`;
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });
    if (!response.ok){
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }
    return await response.json();
}

export const getAccount = async (token) => {
    const url = `${basePath}/account`;
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });
    if (!response.ok){
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }
    return await response.json();
}

export const getCards = async (token) => {
    const url = `${basePath}/account/card`;
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });
    if (!response.ok){
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }
    return await response.json();
}

export const createCard = async (token, obj) => {
    const url = `${basePath}/account/card`;
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
            number: obj.number,
            cvv: obj.cvv,
            name_on_card: obj.nameOnCard,
            exp_date: obj.expDate
        })
    });
    if (!response.ok){
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }
    return await response.json();
}

export const getAccountTransactions = async (token) => {
    const url = `${basePath}/account/transaction`;
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });
    if (!response.ok){
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }
    return await response.json();
}

export const createTransaction = async (token, obj) => {
    const url = `${basePath}/account/transaction`;
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
            card: obj.card,
            type: obj.type,
            amount: obj.amount / 100
        })
    });
    if (!response.ok){
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }
    return await response.json();
}

export const getWallets = async (token) => {
    const url = `${basePath}/stock/wallet`;
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });
    if (!response.ok){
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }
    return await response.json();
}

export const getStocks = async (token) => {
    const url = `${basePath}/stock`;
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });
    if (!response.ok){
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }
    return await response.json();
}

export const getStockTransaction = async (token) => {
    const url = `${basePath}/stock/transaction`;
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });
    if (!response.ok){
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }
    return await response.json();
}

export const createStockTransaction = async (token, obj) => {
    const url = `${basePath}/stock/transaction`;
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
            stock: obj.stock,
            quantity: obj.quantity,
            type: obj.type
        })
    });
    if (!response.ok){
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }
    return await response.json();
}

export const getStockHistorical = async (token, code, from, to) => {
    const url = `${basePath}/stock/historical?code=${code}&from=${from}&to=${to}`;
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });
    if (!response.ok){
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }
    return await response.json();
}
