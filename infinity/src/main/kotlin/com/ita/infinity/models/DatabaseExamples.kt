package com.example.infinitymoneymanager.databaseClasses

import com.ita.infinity.models.Categoria

fun main(){
    val test = DatabaseExamples()
    test.insertExample()
}
class DatabaseExamples {
    fun insertExample(){
        DatabaseManager.openConnection()

        val categoria = Categoria()

        DatabaseManager.insert(categoria)

        DatabaseManager.closeConnection()
    }

    fun selectExample(){
        DatabaseManager.openConnection()

        val result = DatabaseManager.select(GastoFixo(), columns = "id, valor",
            whereCondition = "id > 4 AND id < 10", distinctStatement = true)

        println(result)

        DatabaseManager.closeConnection()
    }
}