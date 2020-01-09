/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.itfactoria.rest.webservices.restfulwebservices.models.dao;

import com.itfactoria.rest.webservices.restfulwebservices.models.entity.Cliente;
import com.itfactoria.rest.webservices.restfulwebservices.models.entity.Municipio;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author jaironino
 */
@Repository
public interface IClienteDAO extends CrudRepository<Cliente, String> {
    
    @Query("from Municipio")
    public List<Municipio>findAllMunicipios();
    
}
