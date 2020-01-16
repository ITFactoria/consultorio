/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.itfactoria.rest.webservices.restfulwebservices.models.dao;

import com.itfactoria.rest.webservices.restfulwebservices.models.entity.Cita;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author jaironino
 */
public interface ICitaDAO extends CrudRepository<Cita, Long>{
    
}
