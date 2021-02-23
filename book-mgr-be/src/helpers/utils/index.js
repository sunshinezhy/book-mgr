const getBody = (ctx) => {
    return ctx.request.body || {};
};

module.exports = {
    getBody,
};