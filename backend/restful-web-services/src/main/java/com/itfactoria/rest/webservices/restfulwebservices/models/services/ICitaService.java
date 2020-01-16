/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.itfactoria.rest.webservices.restfulwebservices.models.services;

import com.itfactoria.rest.webservices.restfulwebservices.models.entity.Cita;
import java.util.List;

/**
 *
 * @author jaironino
 */
public interface ICitaService {
    public List<Cita> findAll();
    public Cita findById(Long idCita);
    public void delete(Long idCita);
    public Cita save(Cita cita);
    
    
    
}
