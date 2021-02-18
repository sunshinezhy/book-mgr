const getMate = () => {
    return {
        createdAt: {
            type: Number,
            default: (new Date()).getTime(),
        },
        updateAt: {
            type: Number,
            default: (new Date()).getTime(),
        },
    };
};

module.exports ={
    getMate,
}