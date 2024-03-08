package com.example.infinitymoneymanager.databaseClasses

import com.ita.infinity.models.Categoria
import com.ita.infinity.services.DatabaseConnector

fun main(){
    val test = DatabaseExamples()
    test.insertExample()
}
class DatabaseExamples {
    fun insertExample(){
        val dbConnector = DatabaseConnector()

        val meta = Meta()
        dbConnector.use { it.insert(meta) }

        val gastoFixo = GastoFixo(metasId = 1)
        dbConnector.use { it.insert(gastoFixo) }
    }

    fun selectExample(){
        val dbConnector = DatabaseConnector()
        val result = dbConnector.use{
            it.select(GastoFixo(), columns = "id, valor",
                whereCondition = "id > 4 AND id < 10", distinctStatement = true)
        }
        println(result)
    }
}