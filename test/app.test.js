import supertest from 'supertest';

import dotenv from 'dotenv';

import app from '../index';


// import db from '../helper/databaseconfig';

// const endpoint = '/auth/v1/';

beforeAll(async () => {
  // await db.connect(); 
  dotenv.config();
 
  await app.listen(3000);
});


describe('App', () => {
  it('should start app', ()=>{

    expect(true).toEqual(true);

  })
})

describe("indexpage", ()=>{

  test("The index route get with index api", async () => {

    const response = await supertest(app).get("/");

    expect(response).toBeDefined();

    expect(response.status).toEqual(200);

  });
 
  
})



