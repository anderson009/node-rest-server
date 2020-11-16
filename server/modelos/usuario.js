const mongoose = require('mongoose');
const uniqueV = require('mongoose-unique-validator');

let Schema = mongoose.Schema;


let rolesV = {
	values: ['ADMIN_ROLE', 'USER_ROLE'],
	message: '{VALUE} no es un role valido'
}

let usuario = new Schema({
	nombre:{
		type : String,
		require: [true, 'el nombre es obligatorio']
	},

	email:{
		type : String,
		unique: true,
		require: [true, 'el email es obligatorio']
	},
	password:{
		type : String,
		require: [true, 'el password es obligatorio']
	},
	img:{
		type : String,
		required: false
		
	},
	role:{
		type: String,
		default: 'USER_ROLE',
		enum: rolesV
	},
	estado:{
		type: Boolean,

		default: true
	},

	google:{

		type: Boolean,

		default: false
	}

});


usuario.methods.toJSON = function (){

	let user = this
	let userOdject = user.toObject();
	 delete userOdject.password;

	 return userOdject;

}

usuario.plugin(uniqueV , {message: '{PATH} debe ser unico'});

module.exports = mongoose.model('Usuario', usuario);