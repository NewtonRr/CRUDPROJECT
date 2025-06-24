import { createUserService, deleteUserService, getAllUsersService, getUsersByIdService, updateUserService } from "../models/userModel.js";

const handleResponse = (res, status, message, data=null) => {
    res.status(status).json({
        status,
        message,
        data,
    })
};

export const createUser = async (req, res, next) => {
    const { name, email } = req.body
    try{
        const newUser = await createUserService(name, email)
        handleResponse(res, 201, 'User created successfully', newUser)
    }catch(err) {
        next(err)
    }
}

export const getAllUsers = async (req, res, next) => {
    try{
        const users = await getAllUsersService()
        handleResponse(res, 200, 'User fetched successfully', users)
    }catch(err) {
        next(err)
    }
}

export const getUserById = async (req, res, next) => {
    try{
        const users = await getUsersByIdService(req.params.id)
        if(!users) return handleResponse(res, 404, 'User not found')
        handleResponse(res, 200, 'User fetched successfully', users)
    }catch(err) {
        next(err)
    }
}

export const updateUser = async (req, res, next) => {
    const { name, email } = req.body
    try{
        const updatedUser = await updateUserService(req.params.id, name, email)
        if(!updatedUser) return handleResponse(res, 404, 'User not found')
        handleResponse(res, 200, 'User Updated successfully', updateUser)
    }catch(err) {
        next(err)
    }
}

export const deleteUser = async (req, res, next) => {
    try{
        const deletedUser = await deleteUserService(req.params.id)
        if(!deleteUser) return handleResponse(res, 404, 'User not found')
        handleResponse(res, 200, 'User Deleted successfully', deleteUser)
    }catch(err) {
        next(err)
    }
}