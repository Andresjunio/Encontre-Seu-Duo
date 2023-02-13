package esports.model;

import java.util.Date;
import java.util.List;

import esports.Enums.WeekDays;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
public class Ads {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private List<WeekDays> days;
	private Integer hourStart;
	private Integer HourEnd;
	private Boolean voiceChat;
	@Temporal(TemporalType.DATE)
	private Date createdAt;
	@ManyToOne
	@JoinColumn(name = "game_id")
	private Game game;
	@OneToOne
	@JoinColumn(name = "player_id")
	private Player player;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public List<WeekDays> getDays() {
		return days;
	}

	public void setDays(List<WeekDays> days) {
		this.days = days;
	}

	public Player getPlayer() {
		return player;
	}

	public void setPlayer(Player player) {
		this.player = player;
	}

	public Integer getHourStart() {
		return hourStart;
	}

	public void setHourStart(Integer hourStart) {
		this.hourStart = hourStart;
	}

	public Integer getHourEnd() {
		return HourEnd;
	}

	public void setHourEnd(Integer hourEnd) {
		HourEnd = hourEnd;
	}

	public Boolean getVoiceChat() {
		return voiceChat;
	}

	public void setVoiceChat(Boolean voiceChat) {
		this.voiceChat = voiceChat;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

	public Game getGame() {
		return game;
	}

	public void setGame(Game game) {
		this.game = game;
	}

}
