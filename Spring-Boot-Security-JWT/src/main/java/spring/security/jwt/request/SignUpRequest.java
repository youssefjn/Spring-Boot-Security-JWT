package spring.security.jwt.request;


import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SignUpRequest {
	@NotBlank
	@Size (min = 3 ,max = 20)
	private String username;
	@NotBlank
	@Size (max = 50)
	@Email 
	private String email;
	@NotBlank
	@Size (min = 6 , max = 120)
	private String password;
	
	private String roles ; 
	
}
