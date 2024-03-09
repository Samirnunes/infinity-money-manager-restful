package com.ita.infinity.services

import com.example.infinitymoneymanager.databaseClasses.GastoUnico
import com.example.infinitymoneymanager.databaseClasses.Meta
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import java.sql.Date
import java.time.LocalDate

@Service
class MetasScreen {
    @Autowired
    private lateinit var dbConnector: DatabaseConnector

    fun getMeta(id: Int): MutableList<MutableMap<String, Any>>? {
        dbConnector.use {
            return it.select(Meta(), whereCondition = "id = $id")
        }
    }
    fun insertMeta(nome: String,
                   valorAlvo: Double = 0.0,
                   valorArrecadado: Double = 0.0,
                   prazo: Date = Date.valueOf(LocalDate.now())){
        dbConnector.use{
            it.insert(
                Meta(
                    nome = nome,
                    valorAlvo = valorAlvo,
                    valorArrecadado = valorArrecadado,
                    prazo = prazo
                )
            )
        }
    }

    fun deleteMeta(id: Int){
        dbConnector.use {
            it.delete(Meta(), whereCondition = "id = $id")
        }
    }

    fun modifyMeta(id: Int,
                   nome: String,
                   valorAlvo: Double = 0.0,
                   valorArrecadado: Double = 0.0,
                   prazo: Date = Date.valueOf(LocalDate.now())){
        deleteMeta(id)
        dbConnector.use{
            it.insert(
                Meta(
                    id = id,
                    nome = nome,
                    valorAlvo = valorAlvo,
                    valorArrecadado = valorArrecadado,
                    prazo = prazo
                )
            )
        }
    }
}