module.exports = (req, res, next) => {
  if (req.session && req.session.user) {
    // res.locals é visível para todos os arquivos njk
    res.locals.user = req.session.user

    return next()
  }

  return res.redirect('/')
}
