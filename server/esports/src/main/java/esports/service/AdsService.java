package esports.service;

import java.util.Date;

import org.springframework.stereotype.Service;

import esports.model.Ads;
import esports.repository.AdsRepository;

@Service
public class AdsService {

	
	private final AdsRepository adsRepository;

	public AdsService(AdsRepository adsRepository) {
		this.adsRepository = adsRepository;
	}
	
	public void saveCurrentDate() {
		Ads ads = new Ads();
		ads.setCreatedAt(new Date());
		
		adsRepository.save(ads);
		
	}
	
	
	
	
}