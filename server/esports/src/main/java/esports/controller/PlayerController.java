package esports.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import esports.repository.PlayerRepository;

@RestController
public class PlayerController {

	@Autowired
	PlayerRepository playerRepository;
	
	
	
	
}
