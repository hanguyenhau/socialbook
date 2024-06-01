package com.hauphuong.book_social;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class BookSocialApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(BookSocialApiApplication.class, args);
	}

}
