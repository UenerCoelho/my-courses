extends CanvasLayer

@onready var time_label: Label = %TimeLabel
@onready var monsters_label: Label = %MonsterLabel

@export var restart_delay: float = 5.0
var restar_cooldown: float
var time_survived: String
var monsters_defeated: int

func _ready():
	time_label.text = time_survived
	monsters_label.text = str(monsters_defeated)
	restar_cooldown = restart_delay
	
func _process(delta):
	restar_cooldown -= delta
	if restar_cooldown <= 0.0:
		restar_game()


func restar_game():
	print("restart the game please")
	pass
