package tn.soft.SchoolMastergo.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import tn.soft.SchoolMastergo.entites.SlotEpmloisTemps;


@Builder
@Data
@AllArgsConstructor
public class Labelvalue {
	private Long value;
	private String label;
	public static Labelvalue fromEntity(SlotEpmloisTemps slotEpmloisTemps) {
	    return Labelvalue.builder()
	        .value(slotEpmloisTemps.getId())
	        .label(slotEpmloisTemps.getTimestart() + " " + slotEpmloisTemps.getTimeend() + " " + slotEpmloisTemps.getJour() )
	        
	        .build();
	  }

}
