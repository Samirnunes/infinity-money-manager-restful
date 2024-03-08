package com.example.infinitymoneymanager.databaseClasses

import com.ita.infinity.models.DatabaseObject
import java.sql.Date
import java.sql.PreparedStatement
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

@Entity
class Meta(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private val id: Int = 0,
    private val nome: String = "",
    private val valorAlvo: Double = 0.0,
    private val valorArrecadado: Double = 0.0,
    private val prazo: Date = Date(0)
): DatabaseObject() {
    override val name: String
        get() = "Meta"
    override val sqlTable: String
        get() = "metas"
    override val sqlColumns: String
        get() = "id, nome, valor_alvo, valor_arrecadado, prazo"

    override fun setQueryVariables(query: PreparedStatement) {
        query.setInt(1, id)
        query.setString(2, nome)
        query.setDouble(3, valorAlvo)
        query.setDouble(4, valorArrecadado)
        query.setDate(5, prazo)
    }
}