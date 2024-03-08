package com.ita.infinity.models

import java.sql.PreparedStatement

abstract class DatabaseObject{
    protected abstract val name: String
    protected abstract val sqlTable: String
    protected abstract val sqlColumns: String

    abstract fun setQueryVariables(query: PreparedStatement)

    fun getObjectName(): String {return name}
    fun getSqlTableName(): String {return sqlTable}
    fun getSqlColumnsNames(): String {return sqlColumns}
}