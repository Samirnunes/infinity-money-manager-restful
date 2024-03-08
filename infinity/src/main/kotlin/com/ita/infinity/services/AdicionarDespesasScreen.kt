package com.ita.infinity.services

import com.example.infinitymoneymanager.databaseClasses.GastoFixo
import com.example.infinitymoneymanager.databaseClasses.GastoVariavel
import com.ita.infinity.models.Categoria
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import java.sql.Date
import java.time.LocalDate

@Service
class AdicionarDespesasScreen {
    @Autowired
    private lateinit var dbConnector: DatabaseConnector

    // no front: if recorrência == "Único" -> usar addGastoVariavel
    fun insertGastoVariavel(valor: Double,
                            categoria: String = "Outros",
                            descricao: String = "",
                            data: Date = Date.valueOf(LocalDate.now())){
        dbConnector.use{
            it.insert(
                GastoVariavel(
                    valor = valor,
                    categoria = categoria,
                    descricao = descricao,
                    data = data
                )
            )
        }
    }

    fun deleteGastoVariavel(id: Int){
        dbConnector.use {
            it.delete(GastoVariavel(), "id = $id")
        }
    }

    fun modifyGastoVariavel(id: Int,
                            valor: Double,
                            categoria: String = "Outros",
                            descricao: String = "",
                            data: Date = Date.valueOf(LocalDate.now())){
        deleteGastoVariavel(id)
        dbConnector.use{
            it.insert(
                GastoVariavel(
                    id = id,
                    valor = valor,
                    categoria = categoria,
                    descricao = descricao,
                    data = data
                )
            )
        }
    }

    fun insertGastoFixo(periodicidade: String = "Mensal",
                        valor: Double = 0.0,
                        categoria: String = "Outros",
                        descricao: String = "",
                        data: Date =  Date.valueOf(LocalDate.now())){
        dbConnector.use{
            it.insert(
                GastoFixo(
                    periodicidade = periodicidade,
                    valor = valor,
                    categoria = categoria,
                    descricao = descricao,
                    data = data
                )
            )
        }
    }

    fun deleteGastoFixo(id: Int){
        dbConnector.use {
            it.delete(GastoFixo(), "id = $id")
        }
    }

    fun modifyGastoFixo(id: Int,
                        periodicidade: String = "Mensal",
                        valor: Double = 0.0,
                        categoria: String = "Outros",
                        descricao: String = "",
                        data: Date =  Date.valueOf(LocalDate.now())){
        deleteGastoFixo(id)
        dbConnector.use{
            it.insert(
                GastoFixo(
                    id = id,
                    periodicidade = periodicidade,
                    valor = valor,
                    categoria = categoria,
                    descricao = descricao,
                    data = data
                )
            )
        }
    }

    fun insertCategoria(categoria: String){
        dbConnector.use{
            it.insert(
                Categoria(categoria = categoria)
            )
        }
    }

    fun deleteCategoria(id: Int){
        dbConnector.use{
            it.delete(
                Categoria(id=id)
            )
        }
    }

    fun modifyCategoria(id: Int, categoria: String){
        deleteCategoria(id)
        dbConnector.use{
            it.insert(
                Categoria(
                    id = id,
                    categoria = categoria
                )
            )
        }
    }
}