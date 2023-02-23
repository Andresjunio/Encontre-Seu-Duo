package esports.service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import esports.model.Ads;
import esports.repository.AdsRepository;
import jakarta.validation.Valid;

@Service
public class AdsService {

	@Autowired
	private final AdsRepository adsRepository;

	public AdsService(AdsRepository adsRepository) {
		this.adsRepository = adsRepository;
	}
	
	
	public ResponseEntity<List<Ads>> findAllAds(){
		return new ResponseEntity<List<Ads>>(adsRepository.findAll(), HttpStatus.OK);		
	}
	
	public ResponseEntity<Ads> getOneAd( Long id){
		Optional<Ads> ad= adsRepository.findById(id);
		if(ad.isEmpty()) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}else {
			return new ResponseEntity<Ads>(ad.get(),HttpStatus.OK);
		}
	}
	
	public ResponseEntity<Ads> saveAd(@RequestBody @Valid Ads ad) {
		ad.setCreatedAt(new Date());
		return new ResponseEntity<Ads>(adsRepository.save(ad), HttpStatus.CREATED);
	}
	
	public ResponseEntity<?> deleteAd(Long id){
		Optional<Ads> ad = adsRepository.findById(id);
		if(ad.isEmpty()) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		adsRepository.delete(ad.get());
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	
	
	
	
	
	
	
	
	
}
