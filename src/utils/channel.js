async function connection(query, item) {
    const url = {
        'product' : `http://localhost:3001/api/items/?q=${query}`,
        'description': `http://localhost:3001/api/items/${query}`,
    }

    const response = await fetch(url[item])
    const data = await response.json();
    return data;
}

export default connection