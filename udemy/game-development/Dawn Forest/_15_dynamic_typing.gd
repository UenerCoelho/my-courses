extends Node2D
class_name _15_dynamic_typing

# Tipagem dinâmica é, basicamente, atribuir um tipo à variável. è recomendável tipar as variável, pois torna o processo
# de compilação mais rápido, pois o compilador, caso não tipado a variável, tipará, e este processo acabo por deixar a
# compilação mais lenta.

var base_attack: int = 1
var bonus_attack: int = 1


func _ready():
	print(base_attack + bonus_attack)
