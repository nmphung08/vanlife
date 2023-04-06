import { createServer, Model, Response } from "miragejs"

createServer({
    models: {
        vans: Model,
        users: Model,
    },

    seeds(server) {
        server.create("van", {
            id: "1",
            name: "Modest Explorer",
            price: 60,
            description:
            "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
            imageUrl:
                "/src/assets/images/modest-explorer.png",
            type: "simple",
            hostId: "123",
        })  
        server.create("van", {
            id: "2",
            name: "Beach Bum",
            price: 80,
            description:
                "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.",
            imageUrl:
                "/src/assets/images/beach-bum.png",
            type: "rugged",
            hostId: "123",
        })
        server.create("van", {
            id: "3",
            name: "Reliable Red",
            price: 100,
            description:
                "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.",
            imageUrl:
                "/src/assets/images/reliable-red.png",
            type: "luxury",
            hostId: "456",
        })
        server.create("van", {
            id: "4",
            name: "Dreamfinder",
            price: 65,
            description:
                "Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.",
            imageUrl:
                "/src/assets/images/dreamfinder.png",
            type: "simple",
            hostId: "789",
        })
        server.create("van", {
            id: "5",
            name: "The Cruiser",
            price: 120,
            description:
                "The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go.",
            imageUrl:
                "/src/assets/images/the-cruiser.png",
            type: "luxury",
            hostId: "789",
        })
        server.create("van", {
            id: "6",
            name: "Green Wonder",
            price: 70,
            description:
                "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.",
            imageUrl:
                "/src/assets/images/green-wonder.png",
            type: "rugged",
            hostId: "123",
        })
        server.create("user", {
            id: "123",
            email: "b@b.com",
            password: "p123",
            name: "Bob",
        })
    },

    routes() {
        this.namespace = "api"
        this.logging = true
        this.timing = 1000  

        this.get("/vans", (schema, request) => {
            // return new Response(400, {}, {message: "Error loading vans"})
            return schema.vans.all()
        })
        this.get("/vans/:id", (schema, request) => {
            const id = request.params.id
            return schema.vans.findBy({ id })
        })
        this.get("/host/vans", (schema, request) => {
            const hostId = "123"
            return schema.vans.where({ hostId })
        })
        this.get("/host/vans/:id", (schema, request) => {
            const id = request.params.id
            const hostId = "123"    
            return schema.vans.findBy({ id, hostId })
        })
        this.post("/login", (schema, request) => {
            const sth = request.requestBody
            console.log(sth)
            const { email, password } = sth
            user = schema.users.findBy({ email, password })
            if (user) {
                user.password = undefined
                return {
                    user,
                    token: "welcome home",
                }
            } else {
                throw new Response(
                    401,
                    {},
                    {
                        message: "Cant find user with those credentials!",
                    }
                )
            }
        })
    },
})
