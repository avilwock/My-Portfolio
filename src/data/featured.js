import GoalGalaxy from "../assets/GoalGalaxy.jpg"
import Snippets from "../assets/Snippets.jpg"
import LoreValeStudios from "../assets/LoreValeStudios.jpg"

const featured = [
    {
        id: 1,
        title: "Goal Galaxy",
        genre: "A goal planning app",
        tagline: "A project made using react, mongoose, and graphql",
        author: "Amanda Vilwock",
        cover: GoalGalaxy,
        link: "https://github.com/avilwock/Goal-Galaxy-MVP",
        isFeatured: true
    },
    {
        id: 2,
        title: "Snippets",
        genre: "An idea capture application",
        tagline: "A project made using react and mongoose",
        author: "Amanda Vilwock",
        cover: Snippets,
        link: "https://github.com/avilwock/Snippets",
        isFeatured: true
    },
    {
        id: 3,
        title: "LoreVale Studios",
        genre: "A promotional app for self-publishers",
        tagline: "A react based application",
        author: "Amanda Vilwock",
        cover: LoreValeStudios,
        link: "https://github.com/avilwock/LoreVale-Studios",
    },
]

export default featured;