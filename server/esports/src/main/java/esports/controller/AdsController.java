package esports.controller;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import esports.model.Ads;
import esports.repository.AdsRepository;
import jakarta.validation.Valid;

@RestController
public class AdsController {

	@Autowired
	AdsRepository adsRepository;

	@GetMapping("/ads")
	public ResponseEntity<List<Ads>> getAllAds(){
		return new ResponseEntity<List<Ads>>(adsRepository.findAll(), HttpStatus.OK);
	}
	
	@GetMapping("/ads/{id}")
	public ResponseEntity<Ads> getOneAd(@PathVariable (value="id") Long id){
		Optional<Ads> ad= adsRepository.findById(id);
		if(ad.isEmpty()) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}else {
			return new ResponseEntity<Ads>(ad.get(),HttpStatus.OK);
		}
	}
	
	@PostMapping("/add-ad")
	public ResponseEntity<Ads> saveAd(@RequestBody @Valid Ads ad) {
		return new ResponseEntity<Ads>(adsRepository.save(ad), HttpStatus.CREATED);
	}
	
	
	
	
}
