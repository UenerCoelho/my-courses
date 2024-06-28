class_name Player
extends CharacterBody2D

@export_category("Movement")
@export var speed: float = 3

@export_category("Weapons")
@export var sword_damage: int = 1

@export_category("Life")
@export var health: int = 100
@export var max_health: int = 100
@export var death_prefab: PackedScene

@export_category("Magic")
@export var ritual_damage: int = 1
@export var ritual_interval: float = 5
@export var ritual_scene: PackedScene

@onready var sprite: Sprite2D = $Sprite2D
@onready var animation_player: AnimationPlayer = $AnimationPlayer
@onready var sword_area: Area2D = $SwordArea
@onready var hitbox_area: Area2D = $HitBoxArea2D

var input_vector: Vector2 = Vector2(0,0)
var is_running: bool = false
var was_running: bool = false
var is_attacking: bool = false
var attack_cooldown: float = 0.0
var hitbox_cooldown: float = 0.0
var ritual_cooldown: float = 0.0

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
	if not is_attacking:
		rotate_sprite()
	
	update_hitbox_detection(delta)
	
	update_ritual(delta)

func update_ritual(delta: float) -> void:
	ritual_cooldown -= delta
	if ritual_cooldown > 0: return
	ritual_cooldown = ritual_interval
	
	var ritual = ritual_scene.instantiate()
	ritual.damage_amount = ritual_damage
	add_child(ritual)

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

func rotate_sprite() -> void:
	# Girar Sprite2D
	if input_vector.x > 0:
		# Desmarcar Flip_H do Sprite2D
		sprite.flip_h = false
	elif input_vector.x < 0:
		# Marcar Flip_H do Sprite2D
		sprite.flip_h = true

func deal_damage_to_enemies() -> void:
	var bodies = sword_area.get_overlapping_bodies()
	for body in bodies:
		if body.is_in_group("enemies"):
			var enemy: Enemy = body
			var direction_to_enemy = (enemy.position - position).normalized()
			var attack_direction: Vector2
			if sprite.flip_h:
				attack_direction = Vector2.LEFT
			else:
				attack_direction = Vector2.RIGHT
			var dot_product = direction_to_enemy.dot(attack_direction)
			if dot_product >= 0.3:
				enemy.damage(sword_damage)
	
func play_run_idle_animation() -> void:
	if not is_attacking:
		if was_running != is_running:
			if is_running:
				animation_player.play("run")
			else:
				animation_player.play("idle")

func damage(amount: int) -> void:
	if health <= 0: return
	health -= amount
	print("Cura Recebida de ", amount, ". Vida restante restante do Player é de: ", health,"/", max_health,"!")	
	#print("Dano Recebid de ", amount, ". Vida restante restante do Player é de: ", health,"!")
	
	
	# Piscar Node
	modulate = Color.DARK_RED
	var tween = create_tween()
	tween.set_ease(Tween.EASE_IN).set_trans(Tween.TRANS_QUINT).tween_property(self, "modulate", Color.WHITE, 0.3)
	
	# Processar Morte
	if health <= 0:
		die()

func die() -> void:
	if death_prefab:
		var death_object = death_prefab.instantiate()
		death_object.position = position
		get_parent().add_child(death_object)
		
	queue_free()

func update_hitbox_detection(delta: float) -> void:
	# Temporizador
	hitbox_cooldown -= delta
	if hitbox_cooldown > 0: return
	# Frequencia
	hitbox_cooldown = 0.5
	 
	# Detectar inimigos
	var bodies = hitbox_area.get_overlapping_bodies()
	for body in bodies:
		if body.is_in_group("enemies"):
			var enemy: Enemy = body
			var damage_amount = 1
			damage(damage_amount)

func heal(amount: int) -> int:
	health += amount
	if health > max_health:
		health = max_health
	return health
	
	
