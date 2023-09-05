extends Node2D
class_name _12_strings

# Strings são variáveis de armazenamento de texto.

# As variáveis abaixo, são variáveis do tipo string.
var hello = "Hello" 
var player_name = "David!"

# Nesta função, chamamos e contatenamos as variáveis acima
func _ready():
	print(hello + " " + player_name) # o resultado será = Hello David!
