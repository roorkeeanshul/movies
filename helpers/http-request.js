const getBodyParams = (request) => {
    const params = request.body;
    return params;
}

const getQueryParams = (request) => {
    const params = request.query;
    return params;
}

const getHeaderParams = (request) => {
    const params = request.headers;
    return params;
}


module.exports = {
    getBodyParams,
    getQueryParams,
    getHeaderParams
};