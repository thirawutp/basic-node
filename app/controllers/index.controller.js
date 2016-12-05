const render = (req,res,next) => {
  res.render('index',{
    title: 'Hello jade',
    message: 'title by jade'
  })
}

export default {
  render
}
