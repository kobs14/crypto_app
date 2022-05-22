package com.spring.repository;

import com.spring.models.User;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
class UserRepositoryTest {

    @Autowired
    private UserRepository underTest;

    //clear test DB after each test
    @AfterEach
    void tearDown() {
        underTest.deleteAll();
    }

    @Test
    void findByUsernameTest() {
    }

    @Test
    void existsByUsernameTest() {
        //given
        String userName = "bon-jovi@gmail.com";

        User user = new User(
                userName,
                "bon-jovi@gmail.com",
                "123456"
        );

        underTest.save(user);

        //when
        boolean exitsUser =  underTest.existsByUsername(userName);

        //then
        assertThat(exitsUser).isTrue();

    }

    @Test
    void existsByEmailTest() {

        //given
        String email = "bon-jovi@gmail.com";

        User user = new User(
                "Bon-Jovi",
                email,
                "123456"
        );

        underTest.save(user);

        //when
        boolean exitsEmail =  underTest.existsByEmail(email);

        //then
        assertThat(exitsEmail).isTrue();
    }

    @Test
    void notExistsByEmailTest() {

        //given
        String email = "bon-jovi@gmail.com";


        //when
        boolean exitsEmail =  underTest.existsByEmail(email);

        //then
        assertThat(exitsEmail).isFalse();
    }
}