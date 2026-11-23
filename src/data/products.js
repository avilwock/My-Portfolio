import GoalGalaxy from "../assets/GoalGalaxy.jpg"
import Snippets from "../assets/Snippets.jpg"
import LoreValeStudios from "../assets/LoreValeStudios.jpg"

const products = [
    {
        id: 1,
        name: "Snippets",
        description: "Have you ever had an idea for a creative writing project and you're afraid you'll forget it before you can jot it down? This application allows you to quickly capture the idea, and organize your ideas and projects in a single easy to locate application.",
        price: 9.99,
        image: Snippets,
        link: "https://github.com/avilwock/Snippets"
    },
    {
        id: 2,
        name: "Goal Galaxy",
        description: "A goal planning application that allows the user to create their own goals, milestone, and rewards to self-evaluate their progress in reaching their goals.",
        price: 14.99,
        image: GoalGalaxy,
        link: "https://github.com/avilwock/Goal-Galaxy-MVP"
    },
    {
        id: 3,
        name: "LoreVale Studios",
        description: "Having trouble promoting your writing? LoreVale hosts a variety of planning options to create your web presence, and to promote your novels, whether it be your first or your fifth",
        price: 19.99,
        image: LoreValeStudios,
        link: "https://github.com/avilwock/LoreVale-Studios"
    }
];

export default products;