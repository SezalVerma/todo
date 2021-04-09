// all actions for home view

module.exports.home = function(req,res){
   return res.render('home' , {
       title : "To Do App"
   })
}