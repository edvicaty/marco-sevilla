const { createServer } = require("miragejs")



export const mockServer = createServer({
  routes() {



    this.get("/founder", () => {
      return {
        data: {

        },
      }
    })

 
  },
})
