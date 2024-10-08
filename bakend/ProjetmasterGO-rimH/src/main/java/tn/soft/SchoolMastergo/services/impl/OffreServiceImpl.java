package tn.soft.SchoolMastergo.services.impl;

import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import tn.soft.SchoolMastergo.configfile.ImageStorage;
import tn.soft.SchoolMastergo.dto.ClassesDto;
import tn.soft.SchoolMastergo.dto.CoursDto;
import tn.soft.SchoolMastergo.dto.OffreDto;
import tn.soft.SchoolMastergo.entites.Agentadministratif;
import tn.soft.SchoolMastergo.entites.Classes;
import tn.soft.SchoolMastergo.entites.Cours;
import tn.soft.SchoolMastergo.entites.Offre;
import tn.soft.SchoolMastergo.repository.OffreRepository;
import tn.soft.SchoolMastergo.services.OffreService;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class OffreServiceImpl implements OffreService {
    private final OffreRepository offreRepository;
    private final ImageStorage imageStorage;

    @Override
    public OffreDto saveOffre(OffreDto offreDto, Authentication connectedUser) {
        Agentadministratif user = ((Agentadministratif) connectedUser.getPrincipal());
        Offre offre = OffreDto.toEntity(offreDto);
        offre.setAgentadministratif(user);
        
        return OffreDto.fromEntity(offreRepository.save(offre));

    }

    @Override
    public List<OffreDto> findAll() {
        return offreRepository.findAll().stream()
                .map(OffreDto::fromEntity)
                .collect(Collectors.toList());
    }

    @Override
    public OffreDto findById(Long id) {
        Optional<Offre> offre = offreRepository.findById(id);
        offre.orElseThrow(() -> new RuntimeException("offre not found with id: " + id));
        return OffreDto.fromEntity(offre.get());
    }

    @Override
    public void deleteSeanceById(Long offreId) {
        offreRepository.deleteById(offreId);
    }
    public ResponseEntity<Offre> findbyId(Long id) {
        if (id == null) {
          //  log.error("student ID is null");
            return null;
        }
        return ResponseEntity.ok(offreRepository.findById(id).get());
                
    }
	
	@Override
	public OffreDto uploadoffreImg(Long Idimg, MultipartFile image) {
		 ResponseEntity<Offre> offreResponse = this.findbyId(Idimg);
	        String imageName=imageStorage.store(image);
	        String fileImageDownloadUrl= ServletUriComponentsBuilder.fromCurrentContextPath().path("api/v1/offres/downloadimgoffre/").path(imageName).toUriString();
	        Offre offre = offreResponse.getBody();
	       
	        if (offre!=null)
	        	offre.setOffreimg(fileImageDownloadUrl) ;
	        Offre courssaved = offreRepository.save(offre);
	        return  OffreDto.fromEntity(courssaved);
	        		 
	}

	@Override
	public OffreDto update(OffreDto offreDto, Authentication connectedUser) {
		Optional<Offre>offreoptional =offreRepository.findById(offreDto.getId());
    	if(offreoptional.isPresent())
    	 {
        Agentadministratif user = ((Agentadministratif) connectedUser.getPrincipal());
        Offre offre = OffreDto.toEntity(offreDto);
        offreoptional.get().setTitre(offre.getTitre());
        offreoptional.get().setNbrheuroffre(offre.getNbrheuroffre());
        offreoptional.get().setFinoffr(offre.getFinoffr());
        offreoptional.get().setAgentadministratif(user);
        return OffreDto.fromEntity(offreRepository.save(offreoptional.get()));
    	 }
    	else
    		throw new RuntimeException("invalid offres");
}
}
