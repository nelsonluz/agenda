module.exports = function(app){
	
	var ContatoController = {
	    index: function(req, res){
	    	console.log(req.session)
	        var usuario = req.session.usuario;
	        var params = {usuario: usuario};
	        res.render('contatos/index', params);
	    },
	    create: function(req,res){
	    	var contato = req.body.contato;
	    	var usuario = req.session.usuario;
	    	usuario.contatos.push(contato);
	    	res.redirect('/contatos');
	    },
	    show:function(req,res){
	    	console.log(req);
	    },
	    edit: function(req,res){
	    	console.log(req);
	    },
	    update: function(req,res){
	    	console.log(req);
	    },
	    destroy: function(req,res){
	    	console.log(req);
	    }	    	    
	}
	return ContatoController;
}