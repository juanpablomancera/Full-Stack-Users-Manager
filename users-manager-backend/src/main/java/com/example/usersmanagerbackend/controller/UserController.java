package com.example.usersmanagerbackend.controller;

import com.example.usersmanagerbackend.entity.User;
import com.example.usersmanagerbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;


    @GetMapping("/api/users")
    public List<User> findUsers(){
        return userRepository.findAll();
    }

    @PostMapping("/api/users")
    public ResponseEntity<User> createUser(@RequestBody User user){
        if (user.getId() != null){
            return ResponseEntity.badRequest().build();

        }
        User result = userRepository.save(user);
        return ResponseEntity.ok(result);
    }

    @PutMapping("/api/users")
    public ResponseEntity<User> updateUser(@RequestBody User user){
        if (user.getId() == null){
            return ResponseEntity.badRequest().build();
        }

        if (!userRepository.existsById(user.getId())){
            return ResponseEntity.badRequest().build();
        }

        User result = userRepository.save(user);
        return ResponseEntity.ok(result);
    }

    @DeleteMapping("/api/users/{id}")
    public ResponseEntity<User> deleteById(@PathVariable Long id){
        if (!userRepository.existsById(id)){
            return ResponseEntity.notFound().build();
        }
        userRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
