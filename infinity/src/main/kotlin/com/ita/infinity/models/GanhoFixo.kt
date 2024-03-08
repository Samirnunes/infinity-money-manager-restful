package com.example.infinitymoneymanager.databaseClasses

import com.ita.infinity.models.DatabaseObject
import java.sql.Date
import java.sql.PreparedStatement
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

@Entity
class GanhoFixo(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private val id: Int = 0,
    private val periodicidade: String = "Mensal",
    private val valor: Double = 0.0,
    private val fonte: String = "Outros",
    private val descricao: String = "",
    private val data: Date = Date(0)
) : DatabaseObject() {
    override val name: String
        get() = "Ganho Fixo"
    override val sqlTable: String
        get() = "ganhos_fixos"
    override val sqlColumns: String
        get() = "id, periodicidade, valor, fonte, descricao, data"

    override fun setQueryVariables(query: PreparedStatement) {
        query.setInt(1, id)
        query.setString(2, periodicidade)
        query.setDouble(3, valor)
        query.setString(4, fonte)
        query.setString(5, descricao)
        query.setDate(6, data)
    }
}