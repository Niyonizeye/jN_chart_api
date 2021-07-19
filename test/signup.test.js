
import supertest from 'supertest';

describe("POST+/auth/v1/signup", () => {

    test("should return firstName is required if it is empty" , async() => {
      
      try {
        const res = await supertest(app).post("/auth/v1/signup").set('Accept', 'application/json').send(newUser[0]);
  
          expect(res.body.error).toBe('validation fails' );
          
          } catch (error) {
              console.log(error)
          }
  
    });
  
    test("should return lastName is required if it is empty" , async() => {
      
      try {
        const res = await supertest(app).post("/auth/v1/signup").set('Accept', 'application/json').send(newUser[1]);
  
          expect(res.body.error).toBe('validation fails' );
          
          } catch (error) {
              console.log(error)
          }
  
    });
    test("should return email is required if it is empty" , async() => {
      
      try {
        const res = await supertest(app).post("/auth/v1/signup").set('Accept', 'application/json').send(newUser[2]);
  
          expect(res.body.error).toBe('validation fails' );
          
          } catch (error) {
              console.log(error)
          }
  
    });
    test("should return password is required if it is empty" , async() => {
      
      try {
        const res = await supertest(app).post("/auth/v1/signup").set('Accept', 'application/json').send(newUser[1]);
  
          expect(res.body.error).toBe('validation fails' );
          
          } catch (error) {
              console.log(error)
          }
  
    });
   
  
  })
  