package com.example.infinitymoneymanager.databaseClasses

import com.ita.infinity.models.DatabaseObject
import java.sql.Date
import java.sql.PreparedStatement
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

@Entity
class GastoVariavel(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private val id: Int = 0,
    private val valor: Double = 0.0,
    private val categoria: String = "Outros",
    private val descricao: String = "",
    private val data: Date = Date(0),
    private val metasId: Int = 0
) : DatabaseObject() {
    override val name: String
        get() = "Gasto Variável"
    override val sqlTable: String
        get() = "gastos_variaveis"
    override val sqlColumns: String
        get() = "id, valor, categoria, descricao, data, metas_id"

    override fun setQueryVariables(query: PreparedStatement) {
        query.setInt(1, id)
        query.setDouble(2, valor)
        query.setString(3, categoria)
        query.setString(4, descricao)
        query.setDate(5, data)
        query.setInt(6, metasId)
    }
}