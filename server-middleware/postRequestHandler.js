module.exports = function(req, res, next) {
    let body = '';

    req.on('data', (data) => {
        body += data;
    });


    req.on('end', () => {
        req.body = JSON.parse(body) || {};
        next();
    });

};