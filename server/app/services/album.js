const transformData = (req, res, next) => {
    req.isAdmin = true;

    next();
}

const validateData = (req, res, next) => {
    const { title, genre } = req.body;
    if (typeof title !== "string" || title.length < 3) {
        res.status(400).send("The title must be at least three caracters long")
    }

    if (!["Rap", "Rock", "Electro"].includes(genre)) {
        res.status(400).send("The genre must be Rap, Rock or Electro")
    }

    if (!req.isAdmin) {
        res.status(403).send("You're not admin")
    }
    next();
}


module.exports = { transformData, validateData }