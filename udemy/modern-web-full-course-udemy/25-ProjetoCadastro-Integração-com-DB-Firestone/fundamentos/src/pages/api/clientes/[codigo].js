export default function handler(req, res) {
  const codigo = req.query.codigo

  res.status(200).json({
    id: codigo,
    nome: `Uener ${codigo}`,
    email: `uenercoelho2${codigo}@hotmail.com`
  })
}
