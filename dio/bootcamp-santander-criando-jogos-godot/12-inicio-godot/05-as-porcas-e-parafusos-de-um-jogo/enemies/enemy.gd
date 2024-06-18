class_name Enemy
extends Node2D

@export var health: int = 10
@export var death_prefab: PackedScene

func damage(amount: int) -> void:
	health -= amount
	print("Dano Recebid de ", amount, ". Vida restante de: ", health,"!")
	
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
