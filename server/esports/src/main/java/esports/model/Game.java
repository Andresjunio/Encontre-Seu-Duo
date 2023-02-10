package esports.model;

import java.util.List;
import java.util.UUID;

import org.springframework.data.annotation.Id;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.OneToMany;

@Entity
public class Game {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private UUID id;
	private String name;
	private String bannerUrl;
	@OneToMany(mappedBy = "game")
	private List<Ads> ads;

	
	public UUID getId() {
		return id;
	}

	public void setId(UUID id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getBannerUrl() {
		return bannerUrl;
	}

	public void setBannerUrl(String bannerUrl) {
		this.bannerUrl = bannerUrl;
	}

	public List<Ads> getAds() {
		return ads;
	}

	public void setAds(List<Ads> ads) {
		this.ads = ads;
	}

}