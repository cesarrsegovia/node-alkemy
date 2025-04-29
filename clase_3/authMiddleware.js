const jwt = require('jsonwebtoken')
const express = require('express')
const  config = require('config');


 const authMiddleware = (req,res,next) => {
    const token = req.headers.authorization;
    if(!token){
        return res.status(401).json({message:'Unauthorized'});
    }
    try{
        const decoded = jwt.verify(token, config.secretKey);
        req.user = decoded;
        next();
    }catch{
        return res.status(401).json({message: 'Invalid token'});
    }
 };

 module.exports = {
    authMiddleware,
 }