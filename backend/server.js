const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function (req, res) {

    const about = {
        avatar_url: "https://avatars2.githubusercontent.com/u/54541316?s=460&v=4",
        name: "Tiago Landim",
        role: "Desenvolvedor WEB",
        description: "Aluno da Rocketseat no curso LaunchBase2.0 - Tecnologias: HTML5, CSS, JS, NunJucks, SQL",
        links: [
            { name: "GitHub", url: "https://github.com/TortoiseTiago" },
            { name: "Twitter", url: "https://twitter.com/login?lang=pt" },
            { name: "Linkedin", url: "https://www.linkedin.com/uas/login?_l=pt" }
        ]
    }
    return res.render("about", { about })
})

server.get("/portifolio", function (req, res) {

    return res.render("portifolio", { items: videos })
})

server.get("/video", function (req, res) {
    const id = req.query.id

    const video = videos.find(function (video) {
        if (video.id == id) {
            return true
        }
    })
    if (!video) {
        return res.send("video not found")
    }
    return res.render("video", { items: video })
})

server.listen(5000, function () {
    console.log("server is runing")
})