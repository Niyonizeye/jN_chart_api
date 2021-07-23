import request from 'supertest';

// import dotenv from 'dotenv';

import app from '../index';


// import db from '../helper/databaseconfig';

// const endpoint = '/auth/v1/';

beforeAll(async () => {
  // await db.connect(); 
  // dotenv.config();
 
  await app.listen(3000);
});


describe('App', () => {
  it('should start app', ()=>{

    expect(true).toEqual(true);

  })
})

describe("indexpage", ()=>{

  test("The index route get with index api", async () => {

    const response = await request(app).get("/");

    expect(response).toBeDefined();

    expect(response.status).toEqual(200);

  });
 
  
})

// signup test

describe("POST+/auth/v1/signup", () => {

  test("should return firstName is required if it is empty" , async() => {
    
    try {
      const res = await request(app).post("/auth/v1/signup").set('Accept', 'application/json').send(newUser[0]);

        expect(res.body.error).toBe('validation fails' );
        
        } catch (error) {
            console.log(error)
        }

  });

  test("should return lastName is required if it is empty" , async() => {
    
    try {
      const res = await request(app).post("/auth/v1/signup").set('Accept', 'application/json').send(newUser[1]);

        expect(res.body.error).toBe('validation fails' );
        
        } catch (error) {
            console.log(error)
        }

  });
  test("should return email is required if it is empty" , async() => {
    
    try {
      const res = await request(app).post("/auth/v1/signup").set('Accept', 'application/json').send(newUser[2]);

        expect(res.body.error).toBe('validation fails' );
        
        } catch (error) {
            console.log(error)
        }

  });
  test("should return password is required if it is empty" , async() => {
    
    try {
      const res = await request(app).post("/auth/v1/signup").set('Accept', 'application/json').send(newUser[1]);

        expect(res.body.error).toBe('validation fails' );
        
        } catch (error) {
            console.log(error)
        }

  });

  it("should create new user", async()=>{

    try {
      const res =  await request(app).post("auth/v1/signup").send({
        id:2,
        firstName: 'Jean Paul',
        lastName: 'NIYONIZEYE',
        email: 'niyoeanpaul@gmail.com',
        password: 'password',
      })

      expect(res.status).toEqual(201);

      expect(res.body).toHaveProperty('user created  Well')

    }
    catch(error) {
      console.log(error);
    }

  })
 

})

// sign in test

describe('user Sign in in the system', ()=>{
  test("should letuser to sign inauth/v1/login", async () => {

    try{
      const res = await request(app).post("auth/v1/login").send({

        email: 'niyoeanpaul@gmail.com',
        password: 'password'

      });
      expect(res.status).toEqual(200);
    }

    catch(error) {

      console.log(error);

    }

  });

})

