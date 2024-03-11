package com.ita.infinity.services

import com.ita.infinity.models.DatabaseObject
import org.springframework.stereotype.Service
import java.io.Closeable
import java.sql.Connection
import java.sql.DriverManager
import java.sql.PreparedStatement
import java.sql.ResultSet

@Service
class DatabaseConnector: Closeable{
    private var connection: Connection? = null

    private fun openConnection() {
        connection = DriverManager.getConnection(
            "jdbc:mysql://localhost:3306/infinity",
            "root",
            "infinity"
        )
    }

    private fun closeConnection() {
        try{
            connection!!.close()
        }
        catch (e : Exception){
            println("Connection with database is already closed.")
        }
    }

    override fun close() {
        this.closeConnection()
    }

    fun insert(databaseObject: DatabaseObject): String {
        this.openConnection()
        val name = databaseObject.getObjectName()
        val sqlColumns = databaseObject.getSqlColumnsNames()
        val sqlTable = databaseObject.getSqlTableName()
        val numberOfColumns = sqlColumns.split(",").size
        val sqlQuestionMarks = "?,".repeat(numberOfColumns - 1) + "?"

        val statement = "INSERT INTO $sqlTable ($sqlColumns) VALUES ($sqlQuestionMarks)"
        try {
            val query = connection!!.prepareStatement(statement)
            databaseObject.setQueryVariables(query)
            if(query.executeUpdate() != 0){
                return "$name successfully inserted."
            }
            return "Query failed. Can't insert."
        }
        catch (e: Exception){
            val message = "Query failed. Verify the connection with database. \n $e"
            println(message)
            return message
        }
    }

    fun delete(databaseObject: DatabaseObject, whereCondition: String = ""): String {
        this.openConnection()
        val name = databaseObject.getObjectName()
        val sqlTable = databaseObject.getSqlTableName()
        var statement = "DELETE FROM $sqlTable"
        if(whereCondition != ""){
            statement += " WHERE $whereCondition"
        }
        try{
            val query = connection!!.prepareStatement(statement)
            if(query.executeUpdate() != 0)
                return "$name successfully deleted."
            return "Query failed. This data probably doesn't exist."
        }
        catch (e : Exception){
            return "Query failed. Verify the connection with database."
        }
    }

    fun select(databaseObject: DatabaseObject, columns: String = "*",
               whereCondition: String = "", distinctStatement: Boolean = false):
            MutableList<MutableMap<String, Any>>?{
        this.openConnection()
        val name = databaseObject.getObjectName()
        val sqlTable = databaseObject.getSqlTableName()
        val distinctStr = if(distinctStatement) "DISTINCT" else ""
        var statement = "SELECT $distinctStr $columns FROM $sqlTable"
        if(whereCondition != ""){
            statement += " WHERE $whereCondition"
        }
        try {
            val query = connection!!.prepareStatement(statement)
            if(query.execute()){
                return queryToSelectResult(query)
            }
            return null
        }
        catch (e : Exception){
            println("Query failed. Verify the connection with database\n$e.")
        }
        return null
    }

    fun queryToSelectResult(query: PreparedStatement): MutableList<MutableMap<String, Any>>{
        fun getColumnValue(rs: ResultSet, columnIndex: Int, columnType: Int): Any {
            return when (columnType) {
                java.sql.Types.INTEGER, java.sql.Types.SMALLINT, java.sql.Types.TINYINT -> rs.getInt(columnIndex)
                java.sql.Types.BIGINT -> rs.getLong(columnIndex)
                java.sql.Types.FLOAT, java.sql.Types.REAL -> rs.getFloat(columnIndex)
                java.sql.Types.DOUBLE -> rs.getDouble(columnIndex)
                java.sql.Types.DECIMAL, java.sql.Types.NUMERIC -> rs.getBigDecimal(columnIndex)
                java.sql.Types.BOOLEAN -> rs.getBoolean(columnIndex)
                else -> rs.getString(columnIndex)
            }
        }

        val resultSet = query.resultSet
        val selectResult = mutableListOf<MutableMap<String, Any>>()
        while (resultSet.next()) {
            val metaData = resultSet.metaData
            val mutableMap = mutableMapOf<String, Any>()
            for (i in 1..metaData.columnCount) {
                val columnName = metaData.getColumnName(i)
                val columnValue = getColumnValue(resultSet, i, metaData.getColumnType(i))
                mutableMap[columnName] = columnValue
            }
            selectResult.add(mutableMap)
        }
        return selectResult
    }
}