package com.makersacademy.acebook.controller;

        import java.util.List;

        import com.makersacademy.acebook.model.Profile;
        import com.makersacademy.acebook.repository.ProfileRepository;
        import org.springframework.web.bind.annotation.DeleteMapping;
        import org.springframework.web.bind.annotation.GetMapping;
        import org.springframework.web.bind.annotation.PathVariable;
        import org.springframework.web.bind.annotation.PostMapping;
        import org.springframework.web.bind.annotation.PutMapping;
        import org.springframework.web.bind.annotation.RequestBody;
        import org.springframework.web.bind.annotation.RestController;

@RestController
class ProfileController {

    private final ProfileRepository repository;

    ProfileController(ProfileRepository repository) {
        this.repository = repository;
    }

    // Aggregate root

    @GetMapping("/profiles")
    List<Profile> all() {
        return repository.findAll();
    }

    @PostMapping("/profiles")
    Profile newProfile(@RequestBody Profile newProfile) {
        return repository.save(newProfile);
    }

    // Single item

    @GetMapping("/profiles/{id}")
    Profile one(@PathVariable Long id) {

        return repository.findById(id);
    }

    @PutMapping("/profiles/{id}")
    Profile replaceProfile(@RequestBody Profile newProfile, @PathVariable Long id) {

        return repository.findById(id)
                .map(profile -> {
                    profile.setName(newProfile.getName());
                    profile.setRole(newProfile.getRole());
                    return repository.save(profile);
                })
                .orElseGet(() -> {
                    newProfile.setId(id);
                    return repository.save(newProfile);
                });
    }

    @DeleteMapping("/profiles/{id}")
    void deleteProfile(@PathVariable Long id) {
        repository.deleteById(id);
    }
}