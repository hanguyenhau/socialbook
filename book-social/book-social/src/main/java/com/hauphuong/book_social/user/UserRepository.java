package com.hauphuong.book_social.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findByEmail(String email);

    @Query("""
SELECT CASE WHEN COUNT(user) > 0 THEN true ELSE false 
END 
FROM User user 
WHERE user.email = :email
""")
    boolean existsByEmail(@Param("email") String email);
}
