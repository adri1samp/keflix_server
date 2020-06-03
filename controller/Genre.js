const { Genre } = require("../config/db");

const create = async (body) => {
    return await Genre.create(body);
};

const update = async (genre, newGenre) => {
    for(let property in newGenre) {
        if(property in genre) {
            genre[property] = newGenre[property];
        }
    } 

    await genre.save();
    return genre;
};

const destroy = async (where) => {
    return await Genre.destroy({
        where: where
    });
};

const count = async (where = null) => {
    return await Genre.count({
        where: where
    });
};

module.exports = {
    create,
    update,
    destroy,
    count
};