extends Node2D

@export var creatures: Array[PackedScene]
@onready var path_fllow_2d: PathFollow2D = $PathFollow2D

func _process(delta: float):
	pass

func get_point() -> Vector2:
	path_fllow_2d.progress_ratio = randf()
	return path_fllow_2d.position
