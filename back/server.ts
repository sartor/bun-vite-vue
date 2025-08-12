import { serve } from "bun"

import pageIndex from "../dist/index.html"

const server = serve({
    port: 3000,
    development: true,
    routes: {
        "/": pageIndex,
        "/api/hello": async req => {
            return new Response(JSON.stringify({message: "Hello World from Bun!"}))
        },
    },

    async fetch(req) {
        // Return 404 for unmatched routes
        return new Response("Not Found", {status: 404})
    },
})

console.log(`Server running on http://localhost:${server.port}`)
