// MILESTONE 1


//importo l'array dalla cartella data
let posts = require ('../data/posts')  //verrà usato nella millestone 2 

//INDEX: restituisce la lista di tutti i post
exports.index = (req, res) => {
    res.send('lista dei post')
    // In futuro cercher il post con quell'id e lo restituirò in JSON
}
//SHOW: restituisce i detagli di un singolo post
exports.show = (req, res) => {
    const id = req.params.id
    res.send(`Dettagli del post ${id}`)
     // In futuro cercher il post con quell'id e lo restituirò in JSON
}
//CREATE: crea un nuovo post
exports.create = (req, res) => {
  res.send('creazione di un nuovo post');
}

//UPDATE:modifica totale
exports.update = (req, res) => {
  const id = req.params.id;
  res.send(`modifica TOTALE del post ${id}`)
}

//MODIFY:modifica parziale, modifica solo alcuni campi del post

exports.modify = (req, res) => {
  const id = req.params.id;
  res.send(`modifica PARZIALE del post ${id}`)
}

//DESTROY: cancella un post
exports.destroy = (req, res) => {
  const id = req.params.id;
  res.send(`Cancellazione del post ${id}`)
}

