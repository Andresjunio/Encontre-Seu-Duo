package esports.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import esports.model.Ads;

@Repository
public interface adsRepository extends JpaRepository<Ads, UUID>{

	
}
