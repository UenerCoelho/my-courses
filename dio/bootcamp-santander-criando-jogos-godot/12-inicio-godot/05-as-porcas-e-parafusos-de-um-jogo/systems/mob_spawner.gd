extends Node2D

@export var creatures: Array[PackedScene]
@export var mob_per_minute: float = 60.0
@onready var path_fllow_2d: PathFollow2D = %PathFollow2D
var cooldown: float = 0.0

func _process(delta: float):
	# Intervalo em seg entre os mobs == 60/frequency
	cooldown -= delta
	if cooldown > 0: return
	
	# Temporizador
	# Frequencia de Monstros / minuto
	# 60 mobs/min = 1 mob/seg ou 60/60 = 1
	# 120 mobs/min = 0.5 mob/seg ou 120/60 = 0.5
	# 30 mobs/min = 2 mob/seg ou 60/30
	var interval = 60.0 / mob_per_minute
	cooldown = interval
	
	# Instanciar uma criatura aleatória
	# - Pegar uma criatura aleatória
	var index = randi_range(0, creatures.size() -1)
	var creature_scene = creatures[index]
	# - Pegar ponto aleatório
	#var point = get_point()
	# - Instanciar cena
	var creature = creature_scene.instantiate()
	# - colocar posição
	creature.position = get_point()
	get_parent().add_child(creature)

func get_point() -> Vector2:
	path_fllow_2d.progress_ratio = randf()
	return path_fllow_2d.global_position
