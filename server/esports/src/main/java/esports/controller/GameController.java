package esports.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import esports.model.Game;
import esports.service.GameService;
import jakarta.validation.Valid;

@RestController
@RequestMapping(value = "/games")
public class GameController {

	@Autowired
	GameService gameService;
	
	
	@CrossOrigin(origins = "http://localhost:8080/games")
	@GetMapping("/all")
	public ResponseEntity<List<Game>> findAllGames(){
		return gameService.findAllGames();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Game> findById(@PathVariable (name = "id") Long id){
		return gameService.findById(id);
	}

	@PostMapping("/add")
	public ResponseEntity<Game> saveGame(@RequestBody @Valid Game game){
		return gameService.saveGame(game);
	}
	
	
}
