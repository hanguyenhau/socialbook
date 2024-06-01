package com.hauphuong.book_social;

import com.hauphuong.book_social.role.Role;
import com.hauphuong.book_social.role.RoleRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.scheduling.annotation.EnableAsync;

@SpringBootApplication
@EnableJpaAuditing
@EnableAsync
public class BookSocialApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(BookSocialApiApplication.class, args);
	}

	@Bean
	public CommandLineRunner runner(RoleRepository role){
		return args ->{
			if (role.findByName("USER").isEmpty()) {
				role.save(Role.builder().name("USER").build());
			}
		};
	}


}
