package com.ita.infinity.services

import com.example.infinitymoneymanager.databaseClasses.GastoUnico
import com.example.infinitymoneymanager.databaseClasses.GanhoUnico
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service


@Service
class ComposicaoScreen {
    @Autowired
    private lateinit var dbConnector: DatabaseConnector

    fun getGastosUnicosByFilter(
        periodo: Long = 30,
        categorias: ArrayList<String>,
    ) : MutableList<MutableMap<String, Any>>? {
        val periodoCondition: String = "data > (NOW() - INTERVAL $periodo DAY)"
        val categoriasSet = categorias.joinToString(prefix = "('", separator = "', '", postfix = "')")
        val categoriasCondition = "categoria NOT IN $categoriasSet"
        val whereCondition = "$periodoCondition AND $categoriasCondition"
        println(whereCondition)
        dbConnector.use {
            return it.select(GastoUnico(), whereCondition = whereCondition)
        }
    }

    fun getGanhosUnicosByFilter(
        periodo: Long = 30,
        categorias: ArrayList<String>,
    ) : MutableList<MutableMap<String, Any>>? {
        val periodoCondition: String = "data > (NOW() - INTERVAL $periodo DAY)"
        val categoriasSet = categorias.joinToString(prefix = "('", separator = "', '", postfix = "')")
        val categoriasCondition = "categoria NOT IN $categoriasSet"
        val whereCondition = "$periodoCondition AND $categoriasCondition"
        dbConnector.use {
            return it.select(GanhoUnico(), whereCondition = whereCondition)
        }
    }
}