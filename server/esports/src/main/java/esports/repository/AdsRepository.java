package esports.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import esports.model.Ads;

@Repository
public interface AdsRepository extends JpaRepository<Ads, Long>{

	@Query("SELECT ads FROM Ads ads JOIN ads.game game WHERE game.id = :id")
	public List<Ads> findByGameId(long id);
	
	
	
}
