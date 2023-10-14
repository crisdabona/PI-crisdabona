const axios = require('axios')

const URL = `https://rickandmortyapi.com/api/character`
const getCharById = async (req, res) => {
    try {
        const {id} = req.params
        const data = (await axios(`${URL}/${id}`)).data
        
        if(data && data.id){
            const character = {
                id,
                name: data.name,
                gender: data.gender,
                species: data.species,
                origin: data.origin.name,
                image: data.image,
                status: data.status
            }
            res.status(200).json(character)
        }else {
            res.status(404).send('Not Found')
        }
    } catch (error) {
        res.status(500).send(error.message);
      } 
}

module.exports = {getCharById}