extends CharacterBody2D

@export var speed: float = 1
@onready var animated_sprite: AnimatedSprite2D = $AnimatedSprite2D

func _physics_process(delta: float) -> void:
	# Calculo da Direção
	var player_position = GameManager.player_position
	var difference = player_position - position
	var input_vector = difference.normalized()
	
	# Movimento
	velocity = input_vector * speed * 100.0
	move_and_slide()
	
	# Girar Sprite2D
	if input_vector.x > 0:
		# Desmarcar Flip_H do Sprite2D
		animated_sprite.flip_h = false
	elif input_vector.x < 0:
		# Marcar Flip_H do Sprite2D
		animated_sprite.flip_h = true
