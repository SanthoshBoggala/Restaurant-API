require('dotenv').config();

const errorHandler = (err, req, res, next) =>{

    const statusCode = res.statusCode ? res.statusCode : 500;

    switch(statusCode.toString()){
        case process.env.NOT_FOUND:
            res.json({
                title: "NOT FOUND",
                msg: err.message,
                stackTrace: err.stack 
            })
            break;
        case process.env.VALIDATION_ERROR:
            res.json({
                title: "VALIDATION ERROR",
                msg: err.message,
                stackTrace: err.stack 
            })
            break;
        case process.env.UNAUTHORIZED:
            res.json({
                title: "UNAUTHORIZED",
                msg: err.message,
                stackTrace: err.stack 
            })
            break;
        case process.env.FORBIDDEN:
            res.json({
                title: "FORBIDDEN",
                msg: err.message,
                stackTrace: err.stack 
            })
            break;
        case process.env.SERVER_ERROR: 
            res.json({
                title : "SERVER ERROR",
                msg : err.message,
                stackTrace: err.stack
            })
            break;
        default:
            console.log("no error...");
            break;
    }
}

module.exports = errorHandler;