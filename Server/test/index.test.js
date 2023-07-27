const app = require("../src/app");
const session = require("supertest");
const agent = session(app);

describe("Test de RUTAS", () => {
   it("Test de RUTAS", () => {});
   describe("GET /rickandmorty/character/:id", () => {
      it("Responde con status: 200", async () => {
         await agent.get("/rickandmorty/character/1").expect(200);
      });

      it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
         const response = await agent.get("/rickandmorty/character/1");
         expect(response.status).toBe(200);
         expect(response.body).toHaveProperty("id");
         expect(response.body).toHaveProperty("name");
         expect(response.body).toHaveProperty("species");
         expect(response.body).toHaveProperty("gender");
         expect(response.body).toHaveProperty("status");
         expect(response.body).toHaveProperty("origin");
         expect(response.body).toHaveProperty("image");
      });

      it("Si hay un error responde con status: 500", async () => {
         await agent.get("/rickandmorty/character/9999").expect(500);
      });
   });
});

describe("GET /rickandmorty/login", () => {
   it("Valida que el acceso sea true con información de inicio de sesión correcta", async () => {
      const response = await agent.get(
         "/rickandmorty/login?email=a@a.com&password=1234567"
      );
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("access", true);
   });
   it("Valida que el acceso sea false con información de inicio de sesión incorrecta", async () => {
      const responde = await agent.get(
         "/rickandmorty/login?email=incorrecto@a.com&password=1234567"
      );
      expect(responde.status).toBe(404);
      expect(responde.body).toHaveProperty("access", false);
   });
});

describe("POST /rickandmorty/fav", () => {
   it("texto prueba", async () => {});
});
