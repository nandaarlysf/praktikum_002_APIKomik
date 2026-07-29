const db = require('../models');

const getKomiks = async (req, res) => {
    try {
        const komiks = await db.Komik.findAll({ include: ['genre'] });
        res.status(200).json(komiks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createKomik = async (req, res) => {
    try {
        const { title, author, description, genreId } = req.body;
        const komik = await db.Komik.create({ title, author, description, genreId });
        res.status(201).json({ message: 'Komik created', komik });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateKomik = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, author, description, genreId } = req.body;
        const komik = await db.Komik.findByPk(id);
        if (!komik) return res.status(404).json({ error: 'Komik not found' });
        
        await komik.update({ title, author, description, genreId });
        res.status(200).json({ message: 'Komik updated', komik });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteKomik = async (req, res) => {
    try {
        const { id } = req.params;
        const komik = await db.Komik.findByPk(id);
        if (!komik) return res.status(404).json({ error: 'Komik not found' });
        
        await komik.destroy();
        res.status(200).json({ message: 'Komik deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getKomiks, createKomik, updateKomik, deleteKomik };


