package com.ita.infinity.controllers.api

import org.jetbrains.annotations.NotNull
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestPart
import org.springframework.web.bind.annotation.RestController

@RestController
class HomeController {
    @PostMapping("/api/v1/infinity/print")
    fun printSomething(@RequestPart @NotNull toPrint: String): ResponseEntity<String> {
        return ResponseEntity<String>(toPrint, HttpStatus.OK)
    }
}