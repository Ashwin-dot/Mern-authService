import request from "supertest";
import app from "../../src/app";
import {describe, expect} from '@jest/globals';

describe("POST /auth/register", ()=>{
    describe("Given All fields",()=>{
        it("Should return the 201 status code", async ()=>{
            //Arange
            const userData = {
                firstName:"Ashwin",
                lastName: "khatiwada",
                email: "aka@gmail.com",
                password: "secret"
            }
            //Act
            const response = await request(app).post('/auth/register').send(userData);
            //Assert
            expect(response.statusCode).toBe(201)
        })
        it("should return valid JSON Format", async ()=>{
             //Arange
             const userData = {
                firstName:"Ashwin",
                lastName: "khatiwada",
                email: "aka@gmail.com",
                password: "secret"
            }
            //Act
            const response = await request(app).post('/auth/register').send(userData);
            //Assert
            expect((response.headers as Record<string,string>)['content-type']).toEqual(expect.stringContaining("json"));
        })
    })

    describe("fields are missing",()=>{

    })
})