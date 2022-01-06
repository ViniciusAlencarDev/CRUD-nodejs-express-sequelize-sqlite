- m2_equipes
idequipe (primary key)
nome (car 150)
ativo (int)

- m2_usuarios
idusuario (primary key)
nome (chart 150)
password (char 150)
login (char 30)
idequipe (foregeinkey)
ativo (int)

cada usuario participa de apenas um grupo
criar um seed para dez usuarios de testes nas duas tabelas
