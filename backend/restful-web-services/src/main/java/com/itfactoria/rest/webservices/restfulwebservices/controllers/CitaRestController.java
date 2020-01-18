/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.itfactoria.rest.webservices.restfulwebservices.controllers;

import com.itfactoria.rest.webservices.restfulwebservices.models.entity.Cita;
import com.itfactoria.rest.webservices.restfulwebservices.models.services.ICitaService;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import javax.validation.Valid;
import org.hibernate.exception.DataException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author jaironino
 */

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5000")

public class CitaRestController {
    
    @Autowired
    private ICitaService citaService;
    
    @GetMapping("/citas")
    @ResponseStatus(HttpStatus.OK)
    public List<Cita> index(){
        System.out.println("********************gettMapping**********************");
        
        
        return citaService.findAll();
    
    }
    
    //Add Cita
    @PostMapping("/citas")
    //@ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<?> create(@Valid @RequestBody Cita cita, BindingResult result){
        
        System.out.println("********************PostMapping**********************");
        System.out.println("Cita: "+cita);
        System.out.println(cita);
        
        
        
        Cita citaNueva = null;
        Map<String, Object> response = new HashMap<>();
        
        if(result.hasErrors()){
            List<String> errors = result.getFieldErrors().
                    stream().map(error -> "El campo '" + error.getField() + "' " + error.getDefaultMessage()).
                    collect(Collectors.toList());
            response.put("errors", errors);
            return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
        }
        try{
            //cita.setFechaCreacion(new Date());
            citaNueva = citaService.save(cita);
        }
        catch(DataAccessException e){
            response.put("mensaje", "Error al crear registro en la BD");
            response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        response.put("mensaje", "La cita fue creada exitosamente");
        response.put("cita", citaNueva);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }
    
    
}
