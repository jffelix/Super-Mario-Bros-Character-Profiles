const controllers = {
    getTitle: function(req, res) {
        res.status(200).send("Super Mario Bros: Character Profiles!");
    }
}

module.exports = controllers;