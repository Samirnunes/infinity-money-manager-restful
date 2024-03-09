package com.ita.infinity.controllers.api

import com.ita.infinity.services.AdicionarDespesasScreen
import org.jetbrains.annotations.NotNull
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*
import java.sql.Date
import java.time.LocalDate

@RestController
@RequestMapping("/api/v1/infinity/adicionar-despesas")
@CrossOrigin(origins = ["http://localhost:3000"])
class AdicionarDespesasController {
    @Autowired
    private lateinit var adicionarDespesasScreen: AdicionarDespesasScreen

    @PostMapping("/get-gasto-unico")
    fun getGastoUnicoButton(
        @RequestParam @NotNull id: Int = 1
    ): MutableList<MutableMap<String, Any>>? {
        return adicionarDespesasScreen.getGastoUnico(id)
    }

    @PostMapping("/insert-gasto-unico")
    fun insertGastoUnicoButton(
        @RequestParam @NotNull valor: Double = 0.0,
        @RequestParam @NotNull categoria: String = "Outros",
        @RequestParam @NotNull descricao: String = "",
        @RequestParam @NotNull data: Date = Date.valueOf(LocalDate.now())
        ){
        adicionarDespesasScreen.insertGastoUnico(valor, categoria, descricao, data)
    }

    @DeleteMapping("/delete-gasto-unico")
    fun deleteGastoUnicoButton(
        @RequestParam @NotNull id: Int
    ){
        adicionarDespesasScreen.deleteGastoUnico(id)
    }

    @PostMapping("/modify-gasto-unico")
    fun modifyGastoUnicoButton(
        @RequestParam @NotNull id: Int,
        @RequestParam @NotNull valor: Double = 0.0,
        @RequestParam @NotNull categoria: String = "Outros",
        @RequestParam @NotNull descricao: String = "",
        @RequestParam @NotNull data: Date = Date.valueOf(LocalDate.now())
    ){
        adicionarDespesasScreen.modifyGastoUnico(id, valor, categoria, descricao, data)
    }

    @GetMapping("/get-gasto-fixo")
    fun getGastoFixoButton(
        @RequestParam @NotNull id: Int = 1
    ): MutableList<MutableMap<String, Any>>? {
        return adicionarDespesasScreen.getGastoFixo(id)
    }

    @PostMapping("/insert-gasto-fixo")
    fun insertGastoFixoButton(@RequestParam @NotNull periodicidade: String = "Mensal",
                              @RequestParam @NotNull valor: Double = 0.0,
                              @RequestParam @NotNull categoria: String = "Outros",
                              @RequestParam @NotNull descricao: String = "",
                              @RequestParam @NotNull data: Date =  Date.valueOf(LocalDate.now())){
        adicionarDespesasScreen.insertGastoFixo(periodicidade, valor, categoria, descricao, data)
    }

    @DeleteMapping("/delete-gasto-fixo")
    fun deleteGastoFixoButton(@RequestParam @NotNull id: Int){
        adicionarDespesasScreen.deleteGastoFixo(id)
    }

    @PostMapping("/modify-gasto-fixo")
    fun modifyGastoFixoButton(@RequestParam @NotNull id: Int,
                              @RequestParam @NotNull periodicidade: String = "Mensal",
                              @RequestParam @NotNull valor: Double = 0.0,
                              @RequestParam @NotNull categoria: String = "Outros",
                              @RequestParam @NotNull descricao: String = "",
                              @RequestParam @NotNull data: Date =  Date.valueOf(LocalDate.now())){
        adicionarDespesasScreen.modifyGastoFixo(id, periodicidade, valor, categoria, descricao, data)
    }

    @GetMapping("/get-categoria")
    fun getCategoriaButton(
        @RequestParam @NotNull id: Int = 1
    ): MutableList<MutableMap<String, Any>>? {
        return adicionarDespesasScreen.getCategoria(id)
    }

    @PostMapping("/insert-categoria")
    fun insertCategoriaButton(@RequestParam @NotNull categoria: String){
        adicionarDespesasScreen.insertCategoria(categoria)
    }

    @DeleteMapping("/delete-categoria")
    fun deleteCategoriaButton(@RequestParam @NotNull id: Int){
        adicionarDespesasScreen.deleteCategoria(id)
    }

    @PostMapping("/modify-categoria")
    fun modifyCategoria(@RequestParam @NotNull id: Int,
                        @RequestParam @NotNull categoria: String){
        adicionarDespesasScreen.modifyCategoria(id, categoria)
    }
}