package tn.soft.SchoolMastergo.security.service.Imp;

import java.util.List;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import tn.soft.SchoolMastergo.security.models.Role;
import tn.soft.SchoolMastergo.security.repository.RoleRepository;
import tn.soft.SchoolMastergo.security.service.RoleService;
@Service
@RequiredArgsConstructor
public class RoleServiceimpl implements RoleService {
private final RoleRepository repositoryrole;
	@Override
	public Role addrole(Role role) {
		// TODO Auto-generated method stub
		return repositoryrole.save(role);
	}

	@Override
	public List<Role> allrols() {
		// TODO Auto-generated method stub
		return repositoryrole.findAll();
	}

	@Override
	public void delete(Integer id) {
		repositoryrole.deleteById(id);
		
	}

	@Override
	public Role findbyid(Integer id) {
		
		return repositoryrole.findById(id).get();
	}

}
