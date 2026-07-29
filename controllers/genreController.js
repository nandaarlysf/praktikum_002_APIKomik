const db = require('../models');

const getGenres = async (req, res) => {
    try {
        const genres = await db.Genre.findAll();
        res.status(200).json(genres);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createGenre = async (req, res) => {
    try {
        const { name } = req.body;
        const genre = await db.Genre.create({ name });
        res.status(201).json({ message: 'Genre created', genre });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateGenre = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const genre = await db.Genre.findByPk(id);
        if (!genre) return res.status(404).json({ error: 'Genre not found' });
        
        await genre.update({ name });
        res.status(200).json({ message: 'Genre updated', genre });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteGenre = async (req, res) => {
    try {
        const { id } = req.params;
        const genre = await db.Genre.findByPk(id);
        if (!genre) return res.status(404).json({ error: 'Genre not found' });
        
        await genre.destroy();
        res.status(200).json({ message: 'Genre deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getGenres, createGenre, updateGenre, deleteGenre };


