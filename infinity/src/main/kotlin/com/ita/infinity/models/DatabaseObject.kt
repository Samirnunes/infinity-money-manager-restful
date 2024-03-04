package com.example.infinitymoneymanager.databaseClasses

import java.sql.PreparedStatement
import javax.persistence.Entity

@Entity
abstract class DatabaseObject{
    protected abstract val name: String
    protected abstract val sqlTable: String
    protected abstract val sqlColumns: String

    abstract fun setQueryVariables(query: PreparedStatement)

    fun getObjectName(): String {return name}
    fun getSqlTableName(): String {return sqlTable}
    fun getSqlColumnsNames(): String {return sqlColumns}
}