// MILESTONE 1


//importo l'array dalla cartella data
let posts = require('../data/postdata')  //verrà usato nella millestone 2 

//INDEX: restituisce la lista di tutti i post
exports.index = (req, res) => {
    res.json(posts);
    // In futuro cercher il post con quell'id e lo restituirò in JSON
}
//SHOW: restituisce i detagli di un singolo post
exports.show = (req, res) => {
    const id = req.params.id
    const post = posts.find (p =>p.id===id)
    if (post) {
    res.json(post);
  } else {
    res.status(404).json({ message: 'Post non trovato' });
  }
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
  const index = posts.findIndex (p => p.id ===id)
   if (index !== -1) {
    posts.splice(index, 1);
    console.log(posts);
    res.status(204).send();
  } else {
    res.status(404).json({ message: 'Post non trovato' });
  }

}

