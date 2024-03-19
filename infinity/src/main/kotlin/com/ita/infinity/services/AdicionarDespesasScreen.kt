package com.ita.infinity.services

import com.example.infinitymoneymanager.databaseClasses.GastoFixo
import com.example.infinitymoneymanager.databaseClasses.GastoUnico
import com.ita.infinity.models.Categoria
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import java.sql.Date
import java.time.LocalDate

@Service
class AdicionarDespesasScreen {
    @Autowired
    private lateinit var dbConnector: DatabaseConnector

    fun getAllGastosUnicos(): MutableList<MutableMap<String, Any>>?{
        dbConnector.use {
            return it.select(GastoUnico())
        }
    }

    fun getGastoUnicoById(id: Int): MutableList<MutableMap<String, Any>>? {
        dbConnector.use {
            return it.select(GastoUnico(), whereCondition = "id = $id")
        }
    }

    // no front: if recorrência == "Único" -> usar addGastoVariavel
    fun insertGastoUnico(valor: Double = 0.0,
                        categoria: String = "Outros",
                        descricao: String = "",
                        data: Date = Date.valueOf(LocalDate.now())): String {
        dbConnector.use{
            return it.insert(
                GastoUnico(
                    valor = valor,
                    categoria = categoria,
                    descricao = descricao,
                    data = data
                )
            )
        }
    }

    fun deleteGastoUnico(id: Int): String {
        dbConnector.use {
            return it.delete(GastoUnico(), "id = $id")
        }
    }

    fun modifyGastoUnico(id: Int,
                            valor: Double,
                            categoria: String = "Outros",
                            descricao: String = "",
                            data: Date = Date.valueOf(LocalDate.now())): String {
        deleteGastoUnico(id)
        dbConnector.use{
            return it.insert(
                GastoUnico(
                    id = id,
                    valor = valor,
                    categoria = categoria,
                    descricao = descricao,
                    data = data
                )
            )
        }
    }

    fun getAllGastosFixos(): MutableList<MutableMap<String, Any>>?{
        dbConnector.use {
            return it.select(GastoFixo())
        }
    }

    fun getGastoFixo(id: Int): MutableList<MutableMap<String, Any>>? {
        dbConnector.use {
            return it.select(GastoFixo(), whereCondition = "id = $id")
        }
    }

    fun insertGastoFixo(periodicidade: String = "Mensal",
                        valor: Double = 0.0,
                        categoria: String = "Outros",
                        descricao: String = "",
                        data: Date =  Date.valueOf(LocalDate.now())): String {
        dbConnector.use{
            return it.insert(
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

    fun deleteGastoFixo(id: Int): String {
        dbConnector.use {
            return it.delete(GastoFixo(), "id = $id")
        }
    }

    fun modifyGastoFixo(id: Int,
                        periodicidade: String = "Mensal",
                        valor: Double = 0.0,
                        categoria: String = "Outros",
                        descricao: String = "",
                        data: Date =  Date.valueOf(LocalDate.now())): String {
        deleteGastoFixo(id)
        dbConnector.use{
            return it.insert(
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

    fun getAllCategorias(): MutableList<MutableMap<String, Any>>?{
        dbConnector.use {
            return it.select(Categoria(), columns = "categoria", distinctStatement = true)
        }
    }

    fun getCategoria(id: Int): MutableList<MutableMap<String, Any>>? {
        dbConnector.use {
            return it.select(Categoria(), whereCondition = "id = $id")
        }
    }

    fun insertCategoria(categoria: String): String {
        dbConnector.use{
            return it.insert(
                Categoria(categoria = categoria)
            )
        }
    }

    fun deleteCategoria(id: Int): String {
        dbConnector.use{
            return it.delete(
                Categoria(id=id)
            )
        }
    }

    fun modifyCategoria(id: Int, categoria: String): String {
        deleteCategoria(id)
        dbConnector.use{
            return it.insert(
                Categoria(
                    id = id,
                    categoria = categoria
                )
            )
        }
    }
}