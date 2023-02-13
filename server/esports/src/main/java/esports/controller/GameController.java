package esports.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import esports.repository.GameRepository;

@RestController
public class GameController {

	@Autowired
	GameRepository gameRepository;
	
	
	
}
