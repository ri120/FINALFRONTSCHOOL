package tn.soft.SchoolMastergo.security.models;


import lombok.Builder;
import lombok.Data;


@Data
@Builder
public class Response {
   private String responseMessage;
   private String email;
}

