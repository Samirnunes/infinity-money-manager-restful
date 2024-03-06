package com.ita.infinity.controllers.api

import org.jetbrains.annotations.NotNull
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

@RestController
@CrossOrigin(origins = ["http://localhost:3000"])
class HomeController {
    @PostMapping("/api/v1/infinity/print")
    fun printSomething(@RequestBody @NotNull toPrint: String): ResponseEntity<String> {
        return ResponseEntity(toPrint, HttpStatus.OK)
    }
}