import md5 from 'md5';

export const fetchData = (search, offset, charId) => {
    const ts = Date.now()
    const charIdStr = charId ? (`/${charId}`) : ""
    let url = new URL("http://gateway.marvel.com/v1/public/characters" + charIdStr)
    const params = {
        ts: ts,
        apikey: process.env.REACT_APP_API_PUBLIC,
        hash: md5(ts + process.env.REACT_APP_API_PRIVATE + process.env.REACT_APP_API_PUBLIC),
        limit: 10
    }
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

    if (search) {
        url = url + `&nameStartsWith=${search}`
    }
    if (offset) {
        url = url + `&offset=${offset * params.limit}`
    }

    return fetch(url).then(resp => resp.json())
}