module.exports.get = (request, response) => {
    console.log(request.headers);
    console.log(request.method);
    console.log(request.data);
    console.log(request.body);
    response.sendStatus(200);
};

module.exports.post = (request, response) => {
    console.log(request.headers);
    console.log(request.method);
    console.log(request.data);
    console.log(request.body);
    response.sendStatus(200);
};
