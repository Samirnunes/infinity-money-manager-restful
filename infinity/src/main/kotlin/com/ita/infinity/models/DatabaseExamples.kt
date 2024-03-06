package com.example.infinitymoneymanager.databaseClasses

fun main(){
    val test = DatabaseExamples()
    test.insertExample()
}
class DatabaseExamples {
    fun insertExample(){
        DatabaseManager.openConnection()

        val meta = Meta()

        DatabaseManager.insert(meta)

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