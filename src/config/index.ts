import {config } from "dotenv";
import path from "path"


config({path: path.join(__dirname, `../../.env/${process.env.NODE_ENV} `)});

const {PORT,NODE_ENV, DB_NAME, DB_HOST, DB_PASSWORD, DB_PORT,DB_USERNAME} =process.env;

export const Config = {
    PORT,
    NODE_ENV,
    DB_NAME, DB_HOST, DB_PASSWORD, DB_PORT,DB_USERNAME
}