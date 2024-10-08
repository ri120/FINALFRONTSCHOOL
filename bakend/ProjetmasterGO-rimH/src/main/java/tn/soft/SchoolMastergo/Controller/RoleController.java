package tn.soft.SchoolMastergo.Controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import tn.soft.SchoolMastergo.security.models.Role;
import tn.soft.SchoolMastergo.security.service.RoleService;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/role")
public class RoleController {
	private final RoleService roleService;
@PostMapping("/save")
	public Role addrole(@RequestBody Role role) {
		return roleService.addrole(role);
	}
@GetMapping("/lister")
	public List<Role> allrols() {
		return roleService.allrols();
	}
@DeleteMapping("/delete/{id}")
	public void delete(@PathVariable("id") Integer id) {
		roleService.delete(id);
	}
@GetMapping("/findbyid/{id}")
	public Role findbyid(@PathVariable("id")Integer id) {
		return roleService.findbyid(id);
	}
	

}
