extends Node2D

@export var damage_amount:int = 1

# Area2D Collisionshape2D
@onready var area2d: Area2D = $Area2D


func deal_damage():
	# get_overlaping_bodies
	var bodies = area2d.get_overlapping_bodies()
	# is_in_group("ememies")
	for body in bodies:
		if body.is_in_group("enemies"):
			var enemy: Enemy = body
			# enemy.damage
			enemy.damage(damage_amount)
