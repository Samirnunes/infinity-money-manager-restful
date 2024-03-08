package com.example.infinitymoneymanager.databaseClasses

import com.ita.infinity.models.DatabaseObject
import java.sql.Date
import java.sql.PreparedStatement
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

@Entity
class GanhoUnico(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private val id: Int = 0,
    private val valor: Double = 0.0,
    private val fonte: String = "Outros",
    private val descricao: String = "",
    private val data: Date = Date(0)
) : DatabaseObject(){
    override val name: String
        get() = "Ganho Único"
    override val sqlTable: String
        get() = "ganhos-unicos"
    override val sqlColumns: String
        get() = "id, valor, fonte, descricao, data"

    override fun setQueryVariables(query: PreparedStatement) {
        query.setInt(1, id)
        query.setDouble(2, valor)
        query.setString(3, fonte)
        query.setString(4, descricao)
        query.setDate(5, data)
    }
}