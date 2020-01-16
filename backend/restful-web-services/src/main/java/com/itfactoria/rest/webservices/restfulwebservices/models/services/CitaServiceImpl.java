/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.itfactoria.rest.webservices.restfulwebservices.models.services;

import com.itfactoria.rest.webservices.restfulwebservices.models.entity.Cita;
import com.itfactoria.rest.webservices.restfulwebservices.models.dao.ICitaDAO;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author jaironino
 */

@Service
public class CitaServiceImpl implements ICitaService{
    
    @Autowired
    private ICitaDAO citaDAO;
    

    @Override
    @Transactional(readOnly = true)
    public List<Cita> findAll() {
        return (List<Cita>)citaDAO.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Cita findById(Long idCita) {
        return citaDAO.findById(idCita).orElse(null);
    }

    @Override
    @Transactional
    public void delete(Long idCita) {
        citaDAO.deleteById(idCita);
        
    }

    @Override
    @Transactional
    public Cita save(Cita cita) {
        return citaDAO.save(cita);
        
    }
    
}
