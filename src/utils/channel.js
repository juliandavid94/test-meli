async function connection(query, item) {
    const url = {
        'product' : `http://localhost:3000/api/items/?q=${query}`,
        'description': `http://localhost:3000/api/items/${query}`,
    }

    const response = await fetch(url[item])
    const data = await response.json();
    console.log(data)
    return data;
}

export default connection