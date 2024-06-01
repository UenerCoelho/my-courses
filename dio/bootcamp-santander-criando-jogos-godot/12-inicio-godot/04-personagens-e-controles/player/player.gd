extends CharacterBody2D

@export var speed: float = 3

@onready var sprite: Sprite2D = $Sprite2D
@onready var animation_player: AnimationPlayer = $AnimationPlayer

var is_running: bool = false

func _physics_process(delta: float) -> void:
	# Obter o Input_vector
	var input_vector = Input.get_vector("move_left", "move_rigth", "move_up", "move_down")
	
	# Apagar DeadZone do input vector
	var deadzone = 0.15
	if abs(input_vector.x) < 0.15:
		input_vector.x = 0.0
	if abs(input_vector.y) < 0.15:
		input_vector.y = 0.0
	
	
	# Modificar a Velocidade
	var target_velocity = input_vector * speed * 100.00
	velocity = lerp(velocity, target_velocity, 0.05)
	move_and_slide()
	
	# Atualizar o is_running
	var was_running = is_running
	is_running = not input_vector.is_zero_approx()
	
	# Tocar Animação
	if was_running != is_running:
		if is_running:
			animation_player.play("run")
		else:
			animation_player.play("idle")
		
	# Girar Sprite2D
	if input_vector.x > 0:
		# Desmarcar Flip_H do Sprite2D
		sprite.flip_h = false
	elif input_vector.x < 0:
		# Marcar Flip_H do Sprite2D
		sprite.flip_h = true
	#elif input_vector.y > 0:
		## Desmarcar Flip_V do Sprite
		#sprite.flip_v = false
	#elif input_vector.y < 0:
		## Marcar Flip_V do Sprite
		#sprite.flip_v = true
