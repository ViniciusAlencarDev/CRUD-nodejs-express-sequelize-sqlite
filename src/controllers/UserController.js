const connection = require('../database/connection')

const responseModel = {
    success: false,
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
                    '${nome}', '${password}', '${login}', ${idequipe}, 1
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

        const { idusuario } = req.query;

        try {
            const [data] = await connection.query(`
                SELECT * FROM m2_usuarios
                WHERE idusuario=${idusuario}
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
                SELECT * FROM m2_usuarios
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
                SELECT * FROM m2_usuarios
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

        const { nome, password, login, idequipe, idusuario } = req.body;

        try {
            await connection.query(`
                UPDATE m2_usuarios SET
                    ${nome ? "nome='"+nome+"'" : ''} ${nome && (password || login || idequipe) ? ',' : ''}
                    ${password ? "password='"+password+"'" : ''} ${(nome || password) && (login || idequipe) ? ',' : ''}
                    ${login ? "login='"+login+"'" : ''} ${(nome || password || login) && (idequipe) ? ',' : ''}
                    ${idequipe ? "idequipe="+idequipe : ''}
                WHERE idusuario=${idusuario}
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

        const { idusuario } = req.body;

        try {
            await connection.query(`
                UPDATE m2_usuarios SET ativo=0 WHERE idusuario=${idusuario}
            `);

            response.success = true
        } catch(e) {
            console.log(e)
            response.error = ['Error']
        }

        return res.json(response)
    },

}
