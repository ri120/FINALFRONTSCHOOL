package tn.soft.SchoolMastergo.security.service;

import java.util.List;

import tn.soft.SchoolMastergo.security.models.Role;

public interface RoleService {
	Role addrole(Role role);
	List<Role> allrols();
	void delete(Integer id);
	Role findbyid(Integer id);
	

}
