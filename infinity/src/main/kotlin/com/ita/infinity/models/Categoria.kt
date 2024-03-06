package com.ita.infinity.models


import com.example.infinitymoneymanager.databaseClasses.DatabaseObject
import java.sql.PreparedStatement
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

@Entity
class Categoria(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private val id: Int = 0,
    private val categoria: String = "",
) : DatabaseObject() {
    override val name: String
        get() = "Categoria"
    override val sqlTable: String
        get() = "categorias"
    override val sqlColumns: String
        get() = "id, categoria"

    override fun setQueryVariables(query: PreparedStatement) {
        query.setInt(1, id)
        query.setString(2, categoria)
    }
}