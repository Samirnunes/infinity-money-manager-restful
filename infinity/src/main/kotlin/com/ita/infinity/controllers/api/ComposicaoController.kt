package com.ita.infinity.controllers.api

import com.ita.infinity.services.ComposicaoScreen
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/v1/infinity/composicao")
@CrossOrigin(origins = ["http://localhost:3000"])
class ComposicaoController {
    class GetGastosUnicosByFilterBody {
        public var categorias: ArrayList<String> = ArrayList()
    }

    @Autowired
    private lateinit var composicaoScreen: ComposicaoScreen

    @GetMapping("get-gastos-unicos")
    fun getGastosUnicosByFilter(
        @RequestParam periodo: Long = 30,
        @RequestBody getGastosUnicosByFilterBody: GetGastosUnicosByFilterBody
    ) : MutableList<MutableMap<String, Any>>? {
        return composicaoScreen.getGastosUnicosByFilter(periodo, getGastosUnicosByFilterBody.categorias)
    }

    class GetGanhosUnicosByFilterBody {
        public var categorias: ArrayList<String> = ArrayList()
    }

    @GetMapping("get-ganhos-unicos")
    fun getGanhosUnicosByFilter(
        @RequestParam periodo: Long = 30,
        @RequestParam getGanhosUnicosByFilterBody: GetGanhosUnicosByFilterBody
    ) : MutableList<MutableMap<String, Any>>? {
        return composicaoScreen.getGanhosUnicosByFilter(periodo, getGanhosUnicosByFilterBody.categorias)
    }
}