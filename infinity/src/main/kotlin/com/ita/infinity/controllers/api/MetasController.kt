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

    @PostMapping("/get-meta")
    fun getMetaButton(@RequestParam @NotNull id: Int): MutableList<MutableMap<String, Any>>? {
        return metasScreen.getMeta(id)
    }

    @PostMapping("/insert-meta")
    fun insertMetaButton(@RequestParam @NotNull nome: String,
                         @RequestParam @NotNull valorAlvo: Double = 0.0,
                         @RequestParam @NotNull valorArrecadado: Double = 0.0,
                         @RequestParam @NotNull prazo: Date = Date.valueOf(LocalDate.now())){
        metasScreen.insertMeta(nome, valorAlvo, valorArrecadado, prazo)
    }

    @PostMapping("/delete-meta")
    fun deleteMetaButton(@RequestParam @NotNull id: Int){
        metasScreen.deleteMeta(id)
    }

    @PostMapping("/modify-meta")
    fun modifyMetaButton(@RequestParam @NotNull id: Int,
                         @RequestParam @NotNull nome: String,
                         @RequestParam @NotNull valorAlvo: Double = 0.0,
                         @RequestParam @NotNull valorArrecadado: Double = 0.0,
                         @RequestParam @NotNull prazo: Date = Date.valueOf(LocalDate.now())){
        metasScreen.modifyMeta(id, nome, valorAlvo, valorArrecadado, prazo)
    }
}