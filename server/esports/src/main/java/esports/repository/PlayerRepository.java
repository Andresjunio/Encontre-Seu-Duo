package esports.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import esports.model.Player;

@Repository
public interface PlayerRepository extends JpaRepository<Player, Long>{

}
