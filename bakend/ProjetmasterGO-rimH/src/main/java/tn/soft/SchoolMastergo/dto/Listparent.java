package tn.soft.SchoolMastergo.dto;

import lombok.*;
import tn.soft.SchoolMastergo.entites.Parent;
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Listparent {
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    public static Parent toEntity(Listparent request)
    {
        return Parent.builder()
                .id(request.getId())
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .phone(request.getPhone())
                .email(request.getEmail())
                .build();
    }
    public static Listparent fromEntity(Parent request)
    {
        return Listparent.builder()
                .id(request.getId())
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .phone(request.getPhone())
                .email(request.getEmail())
                .build();

    }
}
