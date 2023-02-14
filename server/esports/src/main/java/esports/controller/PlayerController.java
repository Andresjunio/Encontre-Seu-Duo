package esports.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import esports.model.Player;
import esports.service.PlayerService;
import jakarta.validation.Valid;

@RestController
@RequestMapping(value = "/player")
public class PlayerController {

	@Autowired
	PlayerService playerService;
	
	@GetMapping("/{id}")
	public ResponseEntity<Player> findById(@PathVariable (name = "id") Long id) {
		return playerService.findById(id);
	}
	
	@PutMapping("/update/{id}")
	public ResponseEntity<Player> updatePlayer(@PathVariable (value = "id") Long id, @RequestBody @Valid Player player){
		return playerService.updatePlayer(id, player);
	}
	
	@PostMapping("/add")
	public ResponseEntity<Player> addPlayer(@RequestBody @Valid Player player){
		return playerService.addPlayer(player);
	}
	
	
}
