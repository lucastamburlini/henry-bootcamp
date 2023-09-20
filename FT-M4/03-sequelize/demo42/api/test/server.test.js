const supertest = require("supertest");
const server = require("../index");

const agent = supertest(server);

describe("GET / harry", () => {
  it("Responde con un status 200", async () => {
    await agent.get("/harry").expect(200);
  });
});
