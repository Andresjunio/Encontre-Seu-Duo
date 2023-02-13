package esports.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import esports.model.Ads;
import esports.service.AdsService;
import jakarta.validation.Valid;

@RestController
@RequestMapping(value = "/ads")
public class AdsController {

	@Autowired
	AdsService adsService;

	@GetMapping("/all")
	public ResponseEntity<List<Ads>> getAllAds(){
		return adsService.findAllAds();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Ads> getOneAd(@PathVariable (value="id") Long id){
		return adsService.getOneAd(id);
	}
	
	@PostMapping("/add")
	public ResponseEntity<Ads> saveAd(@RequestBody @Valid Ads ad) {
		return adsService.saveAd(ad);
	}
	
	@DeleteMapping("delete/{id}")
	public ResponseEntity<?> deleteAd(@PathVariable (value="id") Long id) {
		return adsService.deleteAd(id);
	}
	
	
	
	
}
