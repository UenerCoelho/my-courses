extends Node2D
class_name _14_int
# Variáveis do tipo int, são variávei que armazenão números inteiros.

var base_attack = 1
var bonus_attack = 1
func _ready():
	print(base_attack + bonus_attack) # o resultado desta concatenação será a soma das variáveis acima = 2
