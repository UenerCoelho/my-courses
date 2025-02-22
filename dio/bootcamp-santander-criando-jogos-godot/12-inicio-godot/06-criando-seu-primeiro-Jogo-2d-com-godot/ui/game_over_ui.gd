class_name GameOverUI
extends CanvasLayer

@onready var time_label: Label = %TimeLabel
@onready var monsters_label: Label = %MonsterLabel

@export var restart_delay: float = 5.0
var restar_cooldown: float
#var time_survived: String
#var monsters_defeated: int

func _ready():
	time_label.text = GameManager.time_elapsed_string
	monsters_label.text = str(GameManager.monsters_defeated_counter)
	restar_cooldown = restart_delay
	
func _process(delta):
	restar_cooldown -= delta
	if restar_cooldown <= 0.0:
		restar_game()


func restar_game():
	GameManager.reset()
	get_tree().reload_current_scene()
