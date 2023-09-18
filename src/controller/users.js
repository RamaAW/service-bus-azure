const UsersModel = require('../service/userServices');

const getAllUsers = async (req, res) => {
    try{
        const data = await UsersModel.getAllPeople();

        res.json({
            message: 'GET All Users Success',
            data: data
        })  
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
    }
}

const getUserById = async (req, res) => {
    const {id} = req.params;
    try {
        const data = await UsersModel.getPeopleById(id);

        if (data) {
            res.json({
                message: 'Get Data User By Id Success',
                data: data
            });
        } else {
            res.status(404).json({
                message: 'User not found',
                data: null
            });
        }
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        });
    }
}

const createNewUser = async (req, res) => {
    const {body} = req;

    if(!body.name){
        return res.status(400).json({
            message: 'Anda harus mengisi Nama',
            data: null
        })
    }

    try {
        await UsersModel.createNewPeople(body);
        res.status(201).json({
            message: 'Create New Data User Success',
            data: body
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
    }
}

const updateUser = async (req, res) => {
    const {id} = req.params;
    const {body} = req;

    try {
        await UsersModel.updatePeople(body, id);
        res.json({
            message: 'UPDATE Data User Success',
            data: {
                id: id,
                ...body
            }
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
    }    
}

const deleteUser = async (req, res) => {
    const {id} = req.params;
    try {
        await UsersModel.deletePeople(id);
        res.json({
            message: 'DELETE Data User Success',
            data: id
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
    }
}

module.exports = {
    getAllUsers,
    createNewUser,
    getUserById,
    updateUser,
    deleteUser,
}