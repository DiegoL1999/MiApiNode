const express = require('express')
const routes = express.Router()

routes.get('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM librosinfo', (err, rows) => {
            if(err) return res.send(err)

            res.json(rows)
        } )
    })
})

routes.post('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('INSERT INTO librosinfo set ?', [req.body], (err, rows) => {
            if(err) return res.send(err)

            res.send('El libro a sido registrado con exito.')
        } )
    })
})

routes.delete('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('DELETE from librosinfo where id = ?', [req.params.id], (err, rows) => {
            if(err) return res.send(err)

            res.send('El libro a sido eliminado con exito.')
        } )
    })
})

routes.put('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('UPDATE librosinfo set ? where id = ?', [req.body, req.params.id], (err, rows) => {
            if(err) return res.send(err)

            res.send('El libro a sido actualizado con exito.')
        } )
    })
})

module.exports = routes