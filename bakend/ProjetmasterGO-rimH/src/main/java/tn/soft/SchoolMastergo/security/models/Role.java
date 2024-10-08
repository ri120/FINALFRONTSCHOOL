package tn.soft.SchoolMastergo.security.models;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "role")

public class Role {
	@Id
	   @GeneratedValue
	   private Integer id;
	   @Column(unique = true)
	   private String name;
	   @ManyToMany(mappedBy = "roles")
	   @JsonIgnore
	   private List<User> user;

}
