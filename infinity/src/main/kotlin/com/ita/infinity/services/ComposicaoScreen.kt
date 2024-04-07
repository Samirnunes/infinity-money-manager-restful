package com.ita.infinity.services

import com.example.infinitymoneymanager.databaseClasses.GastoUnico
import com.example.infinitymoneymanager.databaseClasses.GanhoUnico
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import org.springframework.web.bind.annotation.RequestParam
import java.time.LocalDate


@Service
class ComposicaoScreen {
    @Autowired
    private lateinit var dbConnector: DatabaseConnector

    fun getGastosUnicosByFilter(
        @RequestParam periodo: Long = 30,
        @RequestParam categorias: ArrayList<String> = ArrayList()
    ) : MutableList<MutableMap<String, Any>>? {
        val periodoCondition: String = "data < (NOW() - INTERVAL $periodo DAY)"
        val categoriasSet = categorias.joinToString(prefix = "(", separator = ", ", postfix = ")")
        val categoriasCondition = "categoria NOT IN $categoriasSet"
        val whereCondition = "$periodoCondition AND $categoriasCondition"
        dbConnector.use {
            return it.select(GastoUnico(), whereCondition = whereCondition)
        }
    }

    fun getGanhosUnicosByFilter(
        @RequestParam periodo: Long = 30,
        @RequestParam categorias: ArrayList<String> = ArrayList()
    ) : MutableList<MutableMap<String, Any>>? {
        val periodoCondition: String = "data < (NOW() - INTERVAL $periodo DAY)"
        val categoriasSet = categorias.joinToString(prefix = "(", separator = ", ", postfix = ")")
        val categoriasCondition = "categoria NOT IN $categoriasSet"
        val whereCondition = "$periodoCondition AND $categoriasCondition"
        dbConnector.use {
            return it.select(GanhoUnico(), whereCondition = whereCondition)
        }
    }
}