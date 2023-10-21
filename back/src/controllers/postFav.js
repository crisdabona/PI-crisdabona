const {Favorite} = require('../DB_connection')

const postFav = async(req, res) => {
    const { name, origin, status, image, species, gender } = req.body

    if (!name || !origin || !status || !image || !species || !gender) {
      return res.status(400).json({ message: "Faltan datos" })
    }

    try {
        const favorite = await Favorite.create({
            name,
            origin,
            status,
            image,
            species,
            gender,
          })

        const allFavorites = await Favorite.findAll()
        return res.status(200).json(allFavorites)

    } catch (error) {
        return res.status(500).json(error.message) 
    }  
}

module.exports = {postFav}