import express from 'express';

export const getUsers = (req, res) => {
    res.send("Get all Users")
}

export const getUserById = (req, res) => {
    res.send("user: " + req.params.id)
}

export const postUser = (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const type = req.body.type;

    const user = {firstName, lastName, email, type}
    res.status(201).send(user)
}