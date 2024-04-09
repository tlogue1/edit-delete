const express = require("express");
const app = express();
const Joi = require("joi");
const multer = require("multer");
app.use(express.static("public"));
app.use("/uploads", express.static("uploads"));
app.use(express.json());
const cors = require("cors");
app.use(cors());


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/crafts/");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage});

app.get("/",(req,res)=> {
    res.sendFile(__dirname + "/index.html");
});


    let crafts = [
        {
        _id: 1,
        name: "Beaded jellyfish",
        image: "crafts/bead-jellyfish.jpg",
        description: "Create a hanging jellyfish using egg cartons and multicolored beads",
        supplies: [
            "string",
            "egg cartons",
            "beads"
            ],
    },
    {
        _id: 2,
        name: "Character Bookmarks",
        image: "crafts/bookmarks.jpeg",
        description: "Create a little birdy bookmark to always remind you where you were",
        supplies: [
            "yellow construction paper",
            "orange construction paper",
            "black construction paper"
        ],
    },
    {
        _id: 3,
        name: "Button Flowers",
        image: "crafts/button-flowers.jpeg",
        description: "Create a fun bouquet of flowers with you favorite buttons",
        supplies: [
            "multicolored buttons",
            "multicolored flet",
            "green straws",
            "ribbon"
        ],
    },
    {
        _id: 4,
        name: "Cheerio Necklaces",
        image: "crafts/cheerio-necklace.webp",
        description: "Create a fun and edible necklace",
        supplies: [
            "Cheerios or Fruit Loops",
            "Elastic string"
        ],
    },
    {
        _id: 5,
        name: "Cotton ball cupcakes",
        image: "crafts/cotton-ball-cupcakes.webp",
        description: "Decorate your fun filled cupcake however you want",
        supplies: [
            "Construction paper",
            "Cotton Balls",
            "Black Sharpie",
            "Glitter"
        ],
    },
    {
        _id: 6,
        name: "School Themed Mason Jars",
        image: "crafts/decorated-jars.jpeg",
        description: "Let's make mason jars",
        supplies: [
            "Construction Paper",
            "Cotton Balls",
            "Black Sharpie",
            "Glitter"
        ],
    },
    {
        _id: 7,
        name: "Egg Carton Flowers",
        image: "crafts/egg-carton-flowers.jpg",
        description: "Make a beautiful bouquet with egg cartons and other items you can find around the house",
        supplies: [
            "Egg Carton",
            "Buttons",
            "Green Pipe Cleaner",
            "Ribbon",
            "Canvas"
        ],
    },
    {
        _id: 8,
        name: "Finger Puppets",
        image: "crafts/finger-puppets.jpeg",
        description: "These little critters are easy to make, and will entertain your little one while they make a show ",
        supplies: [
            "Pom-poms",
            "Googly Eyes",
            "Pipe Cleaner"
        ],
    },
    {
        _id: 9,
        name: "Ribbon Flower Headbands",
        image: "crafts/flower-headbands.jpg",
        description: "Let your little one show off her new style with these pretty and customizable headbands",
        supplies: [
            "Plain headband",
            "Ribbon",
            "Buttons",
            "Gems"
        ],
    },
    {
        _id: 10,
        name: "Hand Print Fish Puppets",
        image: "crafts/handprint-fish.jpg",
        description: "We all need to take every opportuinty we can to remember those tiny hands, and what better way to do it, then to make fish puppets!",
        supplies: [
            "Popsicle sticks",
            "Cardstock",
            "Gems",
            "Googly Eyes"
        ],
    },
    {
        _id: 11,
        name: "Hand Print Tree",
        image: "crafts/hand-print-tree.jpeg",
        description: "This is a fun way to get your little one into finger painting",
        supplies: [
            "Watercolor Paper",
            "Finger Paint"
        ],
    },
    {
        _id: 12,
        name: "Melted Bead bowl",
        image: "crafts/melted-bead-bowl.jpeg",
        description: "All they need to do is shape their favorite design, warm it up and they have a brand new bowl",
        supplies: [
            "Beads",
            "Bowl",
            "Parchment Paper"
        ],
    },
    {
        _id: 13,
        name: "Monster Kites",
        image: "crafts/monster-rolls.jpg",
        description: "Let's make those scary toilet paper rolls fly",
        supplies: [
            "Toilet Paper rolls",
            "Paint",
            "Tissue Paper",
            "String"
        ],
    },
    {
        _id: 14,
        name: "Pool Noode Boats",
        image: "crafts/noodle-boats.png",
        description: "Let's make a boat that will actually float, due to the floating bottom of a pool noode",
        supplies: [
            "Pool Noodle",
            "Straw",
            "Plastic Paper"
        ],
    },
    {
        _id: 15,
        name: "Paper Plate Bees",
        image: "crafts/paper-plate-bees.jpeg",
        description: "Let's have some fun making cure little bees, or big bees actually",
        supplies: [
            "Paper Plate",
            "Googly Eyes",
            "close pins",
            "Black pom poms",
            "Yellow Paint",
            "Black paint"
        ],
    },
    {
        _id: 16,
        name: "Paper Plate Dinosaurs",
        image: "crafts/paper-plate-dinosaurs.jpg",
        description: "Who would have thought that hald a paper plate would be the base of a dinosaur",
        supplies: [
            "Paper Plate",
            "Paint",
            "Close Pins",
            "construction Paper"
        ],
    },
    {
        _id: 17,
        name: "Porcupine Leafs",
        image: "crafts/porcupine-leaf.webp",
        description: "Let's turn an ordinary paper plate into a fun filled mask",
        supplies: [
            "Leafs",
            "Berries",
            "Acorns",
            "Construction Paper"
        ],
    },
    {
        _id: 18,
        name: "Rainbow Cloud",
        image: "crafts/rainbow-cloud.webp",
        description: "Some cotton and color and you'll have a beautiful rainbow",
        supplies: [
            "Paper Plate",
            "Cotton Balls",
            "Construction Paper"
        ],
    },
    {
        _id: 19,
        name: "Fun Shaped Crayong",
        image: "crafts/shaped-crayons.jpg",
        description: "Let's melt some crayons together and let them harden into fun shapes",
        supplies: [
            "Broken Crayons",
            "Mold"
        ],
    },
    {
        _id: 20,
        name: "Straw Ferris Wheel",
        image: "crafts/straw-faris-wheel.jpg",
        description: "It might be too small to ride, but their farris wheel is the most colorful of all",
        supplies: [
            "Multicolored Straws",
            "Platform"
        ],
    },
    {
        _id: 21,
        name: "Sunny String",
        image: "crafts/sun-string.jpg",
        description: "Let's practice our fine motor skills while we weave the string into a fun smile",
        supplies: [
            "Yellow String",
            "Paper Plate",
            "Yellow Construction paper",
            "Yellow and Orange beads"
        ],
    },
    {
        _id: 22,
        name: "Tissue Ballerinas",
        image: "crafts/tisue-dancer.jpeg",
        description: "These beautiful dancers will look great on display",
        supplies: [
            "Pipe cleaner",
            "Tissue paper",
            "Elastics"
        ],
    },
    {
        _id: 23,
        name: "Toilet Paper Roll Animals",
        image: "crafts/toilet-paper-animals.jpeg",
        description: "These animals are fun for all ages",
        supplies: [
            "Toilet Paper Rolls",
            "Construction Paper",
            "Googly Eyes"
        ],
    },
    {
        _id: 24,
        name: "Toilet paper Butterfly",
        image: "crafts/toilet-paper-butterfly.jpg",
        description: "Such a sweet little flyer",
        supplies: [
            "Toilet Paper Rolls",
            "Construction Paper",
            "Googly Eyes",
            "Buttons"
        ],
    },
    {
        _id: 25,
        name: "Valentines Jar",
        image: "crafts/valentines-jar.webp",
        description: "So much hearts all in one",
        supplies: [
            "Clay",
            "Glitter"
            ],
    },
];

app.get("/api/crafts", (req, res) =>{
    res.send(crafts);
});

app.post("/api/crafts", upload.single("img"), (req,res) => {
    const result = validateCraft(req.body);

    if(result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }

    const craft = {
        _id: crafts.length + 1,
        name: req.body.name,
        description: req.body.description,
        supplies: req.body.supplies.split(","),
    };

    if (req.file) {
        craft.image = "crafts/" + req.file.filename;
    }

    crafts.push(craft);
    res.send(crafts);
});

app.put("/api/crafts/:id", upload.single("img"), (req,res) => {
    const craft = crafts.find((r)=>r._id === parseInt(req.params.id));

    if(!craft){
        res.send(404).send("Craft with given id was not found");
    }

    const result = validateCraft(req.body);

    if(result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }

    craft.name = req.body.name;
    craft.description = req.body.description;
    craft.supplies = req.body.supplies.split(",");

    if (req.file) {
        craft.img = "crafts/" + req.file.filename;
    }

    
    res.send(crafts);
});

app.delete("/api.crafts/:id",(req,res)=>{
    const craft = crafts.find((r)=>r._id === parseInt(req.params.id));

    if(!craft){
        res.status(404).send("The craft with the given id was not found");
        return;
    }

    const index = crafts.indexOf(craft);
    crafts.splice(index, 1);
    res.send(craft);
});



const validateCraft = (craft) => {
    const schema = Joi.object({
        _id: Joi.allow(""),
        supplies: Joi.allow(""),
        name: Joi.string().min(3).required(),
        description: Joi.string().min(3).required(),
    });

    return schema.validate(craft);
};
    
    
app.listen(3001,()=>{
    console.log("listening");
});