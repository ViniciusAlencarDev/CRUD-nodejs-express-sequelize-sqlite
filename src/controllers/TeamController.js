const connection = require('../database/connection')

const responseModel = {
    success: false,
    data: [],
    error: []
}

module.exports = {

    async create(req, res) {
        const response = {...responseModel}

        const { nome } = req.body;

        try {
            const [, affectedRows] = await connection.query(`
                INSERT INTO m2_equipes (nome, ativo) VALUES(
                    '${nome}', 1
                );
            `);

            response.success = affectedRows.changes > 0
        } catch(e) {
            console.log(e)
            response.error = ['Error']
        }

        return res.json(response)
    },

    async data(req, res) {
        const response = {...responseModel}

        const { idequipe } = req.query;

        try {
            const [data] = await connection.query(`
                SELECT * FROM m2_equipes
                WHERE idequipe=${idequipe}
            `);

            if(data.length > 0) {
                response.success = true
                response.data = data
            }
        } catch(e) {
            console.log(e)
            response.error = ['Error']
        }

        return res.json(response)
    },

    async list_active(req, res) {
        const response = {...responseModel}

        try {
            const [data] = await connection.query(`
                SELECT * FROM m2_equipes
                WHERE ativo=1
            `);

            if(data.length > 0) {
                response.success = true
                response.data = data
            }
        }  catch(e) {
            console.log(e)
            response.error = ['Error']
        }

        return res.json(response)
    },

    async list_inactive(req, res) {
        const response = {...responseModel}

        try {
            const [data] = await connection.query(`
                SELECT * FROM m2_equipes
                WHERE ativo=0
            `);

            if(data.length > 0) {
                response.success = true
                response.data = data
            }
        }  catch(e) {
            console.log(e)
            response.error = ['Error']
        }

        return res.json(response)
    },

    async update(req, res) {
        const response = {...responseModel}

        const { nome, idequipe } = req.body;

        try {
            await connection.query(`
                UPDATE m2_equipes SET nome='${nome}' WHERE idequipe=${idequipe}
            `);

            response.success = true
        } catch(e) {
            console.log(e)
            response.error = ['Error']
        }

        return res.json(response)
    },

    async delete(req, res) {
        const response = {...responseModel}

        const { idequipe } = req.body;

        try {
            await connection.query(`
                UPDATE m2_equipes SET ativo=0 WHERE idequipe=${idequipe}
            `);

            response.success = true
        } catch(e) {
            console.log(e)
            response.error = ['Error']
        }

        return res.json(response)
    },

}
