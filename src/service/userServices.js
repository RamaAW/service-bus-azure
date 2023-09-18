const req = require('express/lib/request');
const sequelize = require('../config/database');
const User = require('../models/users'); // Sesuaikan dengan model Anda


// const getAllPeople = () => {
//     const SQLQuery = 'SELECT * FROM users';

//     return sequelize.query(SQLQuery);
// }

const getAllPeople = () => {
    return User.findAll();
}

// const getPeopleById = (id) => {
//     const SQLQuery = `SELECT * FROM users WHERE id=${id}`;
    
//     return sequelize.query(SQLQuery);
// }

const getPeopleById = (id) => {
    return User.findByPk(id);
}

// const createNewPeople = (body) => {
//     const SQLQuery = `  INSERT INTO users (name, job, age, dateOfBirth, address) 
//                         VALUES('${body.name}', '${body.job}', '${body.age}', '${body.dateOfBirth}', '${body.address}')`
//     return sequelize.query(SQLQuery);
// }

const createNewPeople = (body) => {
    return User.create({
        name: body.name,
        job: body.job,
        age: body.age,
        dateOfBirth: body.dateOfBirth,
        address: body.address,
    });
}

// const updatePeople = (body, id) => {
//     const SQLQuery = `  UPDATE users 
//                         SET name='${body.name}', job='${body.job}', age='${body.age}', dateOfBirth='${body.dateOfBirth}', address='${body.address}' 
//                         WHERE id=${id}`;
//     return sequelize.query(SQLQuery);
// }

const updatePeople = (body, id) => {
    return User.update(body, {
        where: {
            id: id,
        },
    });
}

const deletePeople = (id) => {
    return User.destroy({
        where: {
            id: id,
        },
    });
}

// const deletePeople = (id) => {
//     const SQLQuery = `DELETE FROM users WHERE id=${id}`;

//     return sequelize.query(SQLQuery);
// }

module.exports = {
    getAllPeople,
    createNewPeople,
    updatePeople,
    deletePeople,
    getPeopleById
}