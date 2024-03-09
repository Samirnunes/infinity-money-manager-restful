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
                        data: Date = Date.valueOf(LocalDate.now())){
        dbConnector.use{
            it.insert(
                GastoUnico(
                    valor = valor,
                    categoria = categoria,
                    descricao = descricao,
                    data = data
                )
            )
        }
    }

    fun deleteGastoUnico(id: Int){
        dbConnector.use {
            it.delete(GastoUnico(), "id = $id")
        }
    }

    fun modifyGastoUnico(id: Int,
                            valor: Double,
                            categoria: String = "Outros",
                            descricao: String = "",
                            data: Date = Date.valueOf(LocalDate.now())){
        deleteGastoUnico(id)
        dbConnector.use{
            it.insert(
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

    fun getAllCategorias(): MutableList<MutableMap<String, Any>>?{
        dbConnector.use {
            return it.select(Categoria())
        }
    }

    fun getCategoria(id: Int): MutableList<MutableMap<String, Any>>? {
        dbConnector.use {
            return it.select(Categoria(), whereCondition = "id = $id")
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