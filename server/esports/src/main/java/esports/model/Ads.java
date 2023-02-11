package esports.model;

import java.sql.Date;
import java.util.UUID;

import esports.Enums.WeekDays;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Ads {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private UUID id;
	private String name;
	private Integer yearsPlaying;
	private String discord;
	private WeekDays days;
	private Integer hourStart;
	private Integer HourEnd;
	private Boolean voiceChat;
	private Date createdAt;
	@ManyToOne
	@JoinColumn(name = "id_game")
	private Game game;

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

	public Integer getYearsPlaying() {
		return yearsPlaying;
	}

	public void setYearsPlaying(Integer yearsPlaying) {
		this.yearsPlaying = yearsPlaying;
	}

	public String getDiscord() {
		return discord;
	}

	public void setDiscord(String discord) {
		this.discord = discord;
	}

	public WeekDays getDays() {
		return days;
	}

	public void setDays(WeekDays days) {
		this.days = days;
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
