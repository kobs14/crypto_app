package com.spring.security.services;

import com.spring.models.User;
import com.spring.repository.UserRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import static org.mockito.Mockito.verify;

class UserDetailsServiceImplTest {

    @Mock
    private UserRepository userRepository;

    private UserDetailsServiceImpl underTest;
    private  AutoCloseable autoCloseable;



    @BeforeEach
    void setUp() {
        autoCloseable = MockitoAnnotations.openMocks(this);
        underTest = new UserDetailsServiceImpl(userRepository);

    }

    @AfterEach
    void tearDown() throws Exception {
        autoCloseable.close();
    }

    @Test
    void loadUserByUsernameTest() {

//        //given
//        User user = new User(
//                "bon-jovi@gmail.com",
//                "bon-jovi@gmail.com",
//                "123456"
//        );
//
//        //when
//        underTest.loadUserByUsername(user.getUsername());

    }
}