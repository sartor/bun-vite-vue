import { serve, file } from "bun"

const server = serve({
    port: 3000,
    development: true,
    routes: {
        "/api/hello": async req => {
            return new Response(JSON.stringify({message: "Hello World from Bun!"}))
        },
    },

    async fetch(req) {
        const path = new URL(req.url).pathname

        // Special case - index page
        if (path === "/" || (!path.startsWith("/assets") && !path.startsWith("/api"))) {
            return new Response( file(`dist/index.html`))
        }

        // All other assets, that really exists and path not started with api
        if (path.startsWith("/assets")) {
            return new Response( file(`dist/${path}`))
        }

        // Return 404 for unmatched routes
        return new Response("Not Found", {status: 404})
    },
})

console.log(`Server running on http://localhost:${server.port}`)
