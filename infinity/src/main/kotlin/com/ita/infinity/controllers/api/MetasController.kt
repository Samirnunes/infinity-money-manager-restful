package com.ita.infinity.controllers.api

import com.ita.infinity.services.MetasScreen
import org.jetbrains.annotations.NotNull
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*
import java.sql.Date
import java.time.LocalDate

@RestController
@RequestMapping("/api/v1/infinity/metas")
@CrossOrigin(origins = ["http://localhost:3000"])
class MetasController {
    @Autowired
    private lateinit var metasScreen: MetasScreen

    @GetMapping("/get-all-metas")
    fun getAllMetas(): MutableList<MutableMap<String, Any>>? {
        return metasScreen.getAllMetas()
    }

    @PostMapping("/get-meta")
    fun getMetaById(@RequestParam @NotNull id: Int): MutableList<MutableMap<String, Any>>? {
        return metasScreen.getMetaById(id)
    }

    @PostMapping("/insert-meta")
    fun insertMetaButton(@RequestParam @NotNull nome: String,
                         @RequestParam @NotNull valorAlvo: Double = 0.0,
                         @RequestParam @NotNull valorArrecadado: Double = 0.0,
                         @RequestParam @NotNull prazo: Date = Date.valueOf(LocalDate.now())): String {
        return metasScreen.insertMeta(nome, valorAlvo, valorArrecadado, prazo)
    }

    @DeleteMapping("/delete-meta")
    fun deleteMetaButton(@RequestParam @NotNull id: Int): String {
        return metasScreen.deleteMeta(id)
    }

    @PostMapping("/modify-meta")
    fun modifyMetaButton(@RequestParam @NotNull id: Int,
                         @RequestParam @NotNull nome: String,
                         @RequestParam @NotNull valorAlvo: Double = 0.0,
                         @RequestParam @NotNull valorArrecadado: Double = 0.0,
                         @RequestParam @NotNull prazo: Date = Date.valueOf(LocalDate.now())): String {
        return metasScreen.modifyMeta(id, nome, valorAlvo, valorArrecadado, prazo)
    }
}