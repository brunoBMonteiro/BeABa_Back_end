const Usuario = require('./usuario');
const Template = require('./template');

// Definindo a relação entre Usuario e Template
Usuario.hasMany(Template, {
  foreignKey: 'id_usuario_cadastrado',
  as: 'templates'
});

Template.belongsTo(Usuario, {
  foreignKey: 'id_usuario_cadastrado',
  as: 'usuario'
});
