package esports.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import esports.model.Player;
import esports.repository.PlayerRepository;

@Service
public class PlayerService {

	@Autowired
	PlayerRepository playerRepository;
	
	public ResponseEntity<Player> findById(Long id){
		Optional<Player> player = playerRepository.findById(id);
		if(player.isEmpty()) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Player>(player.get(),HttpStatus.OK);
	}
	
	public ResponseEntity<?> deletePlayer(Long id){
		Optional<Player> player = playerRepository.findById(id);
		if(player.isEmpty()) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		playerRepository.delete(player.get());
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	public ResponseEntity<Player> updatePlayer(Long id, Player player){
		Optional<Player> playerOp = playerRepository.findById(id);
		if(playerOp.isEmpty()) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		player.setId(playerOp.get().getId());
		return new ResponseEntity<Player>(playerRepository.save(player), HttpStatus.CREATED);
		
	}
	
	public ResponseEntity<Player> addPlayer(Player player){
		return new ResponseEntity<Player>(playerRepository.save(player), HttpStatus.CREATED);
	}
	
	
}
