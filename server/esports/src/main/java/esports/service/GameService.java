package esports.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import esports.model.Game;
import esports.repository.GameRepository;

@Service
public class GameService {

	@Autowired
	GameRepository gameRepository;
	
	public ResponseEntity<List<Game>> findAllGames(){
		return new ResponseEntity<List<Game>>(gameRepository.findAll(), HttpStatus.OK);
	}
	
	public ResponseEntity<Game> findById(Long id){
		Optional<Game> game = gameRepository.findById(id);
		if(game.isEmpty()) {
			return  new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Game>(game.get(),HttpStatus.OK);
	}
	
	public ResponseEntity<Game> saveGame(Game game){
		return new ResponseEntity<Game>(gameRepository.save(game), HttpStatus.CREATED);
	}
	
}
