extends Node

@export var speed: float = 1
# @onready var animated_sprite: AnimatedSprite2D = $AnimatedSprite2D

var sprite: AnimatedSprite2D
var enemy: Enemy

func _ready():
	enemy = get_parent()
	sprite = enemy.get_node("AnimatedSprite2D")

func _physics_process(delta: float) -> void:
	# Calculo da Direção
	var player_position = GameManager.player_position
	var difference = player_position - enemy.position
	var input_vector = difference.normalized()
	
	# Movimento
	enemy.velocity = input_vector * speed * 100.0
	enemy.move_and_slide()
	
	# Girar Sprite2D
	if input_vector.x > 0:
		# Desmarcar Flip_H do Sprite2D
		sprite.flip_h = false
	elif input_vector.x < 0:
		# Marcar Flip_H do Sprite2D
		sprite.flip_h = true
