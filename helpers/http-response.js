const success = (res, result) => {
  
    return res.status(200).json(result);
}

const error = (res, error) => {
    const response = {
        'code': 201,
        'message': 'error',
        'data': error
    }
    return res.status(201).json(response);
}

module.exports = {
    success,
    error
};