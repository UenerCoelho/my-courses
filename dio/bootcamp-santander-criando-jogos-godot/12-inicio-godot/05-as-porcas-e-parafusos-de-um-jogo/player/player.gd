extends CharacterBody2D

@export var speed: float = 3
@export var sword_damage: int = 1

@onready var sprite: Sprite2D = $Sprite2D
@onready var animation_player: AnimationPlayer = $AnimationPlayer
@onready var sword_area: Area2D = $SwordArea

var input_vector: Vector2 = Vector2(0,0)
var is_running: bool = false
var was_running: bool = false
var is_attacking: bool = false
var attack_cooldown: float = 0.0

func _process(delta: float) -> void:
	
	GameManager.player_position = position
	# Ler o Input
	read_input()
	# tocar animação
	play_run_idle_animation()
	# Attack
	if Input.is_action_just_pressed("attack_1"):
		attack_1()
	elif Input.is_action_just_pressed("attack_2"):
		attack_2()
	elif Input.is_action_just_pressed("attack_3"):
		attack_3()
	elif Input.is_action_just_pressed("attack_4"):
		attack_4()
		
	update_attack_cooldown(delta)

func read_input() -> void:
	# Obter o Input_vector
	input_vector = Input.get_vector("move_left", "move_rigth", "move_up", "move_down")
	
	# Apagar DeadZone do input vector
	var deadzone = 0.15
	if abs(input_vector.x) < 0.15:
		input_vector.x = 0.0
	if abs(input_vector.y) < 0.15:
		input_vector.y = 0.0
	
	# Atualizar o is_running
	was_running = is_running
	is_running = not input_vector.is_zero_approx()

func _physics_process(delta: float) -> void:
	# Modificar a Velocidade
	var target_velocity = input_vector * speed * 100.00
	if is_attacking:
		target_velocity *= 0.25
	velocity = lerp(velocity, target_velocity, 0.05)
	move_and_slide()
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

func update_attack_cooldown(delta: float) -> void:
	# Atualizando Temporizador do Ataque
	attack_cooldown -= delta
	if is_attacking:
		if attack_cooldown <= 0.0:
			is_attacking = false		
			is_running = false
			animation_player.play("idle")

func attack_1() -> void:
	if is_attacking:
		return
	# Tocar Animação
	animation_player.play("atk_side_1")
	# Config do Temporizador
	attack_cooldown = 0.6
	#Marcar Ataque
	is_attacking = true

func attack_2() -> void:
	if is_attacking:
		return
		
	# Tocar Animação
	animation_player.play("atk_side_2")
	
	# Config do Temporizador
	attack_cooldown = 0.6
	
	#Marcar Ataque
	is_attacking = true

func attack_3() -> void:
	if is_attacking:
		return
	# Tocar Animação
	animation_player.play("atk_up_1")
	# Config do Temporizador
	attack_cooldown = 0.6
	#Marcar Ataque
	is_attacking = true

func attack_4() -> void:
	if is_attacking:
		return
	# Tocar Animação
	animation_player.play("atk_down_1")
	# Config do Temporizador
	attack_cooldown = 0.6
	#Marcar Ataque
	is_attacking = true

func deal_damage_to_enemies() -> void:
	var bodies = sword_area.get_overlapping_bodies()
	for body in bodies:
		if body.is_in_group("enemies"):
			var enemy: Enemy = body
			enemy.damage(sword_damage)
	
func play_run_idle_animation() -> void:
	if not is_attacking:
		if was_running != is_running:
			if is_running:
				animation_player.play("run")
			else:
				animation_player.play("idle")

