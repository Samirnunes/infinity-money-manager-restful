package com.ita.infinity.controllers.api

import com.ita.infinity.services.ComposicaoScreen
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*

@RestController
@CrossOrigin(origins = ["http://localhost:3000"])
class ComposicaoController {
    @Autowired
    private lateinit var composicaoScreen: ComposicaoScreen

    @GetMapping("get-gastos-unicos")
    fun getGastosUnicosByFilter(
        @RequestParam periodo: Long = 30,
        @RequestParam categorias: ArrayList<String> = ArrayList()
    ) : MutableList<MutableMap<String, Any>>? {
        return composicaoScreen.getGastosUnicosByFilter(periodo, categorias)
    }

    @GetMapping("get-ganhos-unicos")
    fun getGanhosUnicosByFilter(
        @RequestParam periodo: Long = 30,
        @RequestParam categorias: ArrayList<String> = ArrayList()
    ) : MutableList<MutableMap<String, Any>>? {
        return composicaoScreen.getGanhosUnicosByFilter(periodo, categorias)
    }
}