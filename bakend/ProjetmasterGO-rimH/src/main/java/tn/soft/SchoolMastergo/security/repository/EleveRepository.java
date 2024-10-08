package tn.soft.SchoolMastergo.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import tn.soft.SchoolMastergo.entites.Eleve;
import tn.soft.SchoolMastergo.entites.NiveauScolaire;

import java.util.List;
import java.util.Optional;

public interface EleveRepository extends JpaRepository<Eleve, Long> {
    @Query("select u from Eleve u where u.niveauScolaire = ?1 ")
    List<Eleve> listAllEleveByNiv(NiveauScolaire niveauScolaire);
    @Query("select u from Eleve u where u.niveauScolaire = ?1 and u.statutPaiement= 'paye' and u.statutAffectation='non affecte'")
    List<Eleve> listAllEleveByNivAndPaye(NiveauScolaire niveauScolaire);
    Optional<Eleve> findByEmail(String email);
    @Query("select u from Eleve u where u.classes.id = ?1 and u.statutPaiement= 'paye' and u.statutAffectation='affecte'")
    List<Eleve> listAllEleveByClasse(Long id);

    @Query("select u from Eleve u where u.parent.id = ?1 ")
    List<Eleve> listEleveByParent(Long id);

}
