const connection = require('../database/connection')

const responseModel = {
    response: false,
    data: [],
    error: []
}

module.exports = {

    async create(req, res) {
        const response = {...responseModel}

        const { nome, password, login, idequipe } = req.body;

        try {
            const [, affectedRows] = await connection.query(`
                INSERT INTO m2_usuarios (nome, password, login, idequipe, ativo) VALUES(
                    '${nome}',
                    '${password}',
                    '${login}',
                    ${idequipe},
                    1
                );
            `);

            response.success = affectedRows > 0
        } catch(e) {
            console.log(e)
            response.error = ['Error']
        }

        return res.json(response)
    },

    async data(req, res) {
        const response = {...responseModel}

        const { idequipe } = req.body;

        const [data] = await connection.query(`
            SELECT * FROM m2_equipes
            WHERE idequipe=${idequipe}
        `);

        if(data.length > 0) {
            response.success = true
            response.data = data
        }

        return res.json(response)
    },

    async list_active(req, res) {
        const response = {...responseModel}

        const [data] = await connection.query(`
            SELECT * FROM m2_equipes
            WHERE ativo=1
        `);

        if(data.length > 0) {
            response.success = true
            response.data = data
        }

        return res.json(response)
    },

    async list_inactive(req, res) {
        const response = {...responseModel}

        const [data] = await connection.query(`
            SELECT * FROM m2_equipes
            WHERE ativo=0
        `);

        if(data.length > 0) {
            response.success = true
            response.data = data
        }

        return res.json(response)
    },

    async update(req, res) {
        const response = {...responseModel}

        return res.json(response)
    },

    async delete(req, res) {
        const response = {...responseModel}

        return res.json(response)
    },

}
