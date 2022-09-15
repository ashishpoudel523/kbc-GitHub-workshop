// Template Engine


// Template enignes are the way to create dynamic HTML pages in a modular pattern.Engine

// They are not basically the hardware the hardware engines but a library files that helps us to render other codes in our HTML page; 


app.get {
    Response.render() => {
        EJS
    }
}

app.get("/services"), (req, res) => {
    res.render("services", ) {
        title: "Our Services",
        services: "Web Desiginig",
        "SEO",
        "Data Science"
    }
}


app.get("/", (req, res) => {
    res.render("homepage", {
        data: {
            tile: "Homepage | HuddleNepal"
        }
    })
})

app.use((req, res) => {
    res.render("Page not found")
})

app.get("/api", apiRoute)

It is called server side rendering(SSR)
vs
Client Side Rendering


Monolothic Architecture

It is built as one large syatem and is usually one code base.

It is not easy to scale based on demand.

It has shared database.Architecture
Large code base makes IDE slow and build time gets increase.Architecture
It exteremely diffcilt to chanfe technology or language or frameware beaciuse everything is lightly coupled and depend.

Microservices Architecture