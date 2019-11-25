/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.itfactoria.rest.webservices.restfulwebservices.controllers;

import com.itfactoria.rest.webservices.restfulwebservices.models.entity.Cliente;
import com.itfactoria.rest.webservices.restfulwebservices.models.services.IClienteService;
import java.time.Clock;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.hibernate.exception.DataException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
@CrossOrigin(origins="http://localhost:5000")

public class ClienteRestController {
    
    @Autowired
    private IClienteService clienteService;
    
    @GetMapping("/clientes")
    public List<Cliente> index(){
        return clienteService.findAll();
    }
    
    @GetMapping("/clientes/{idCliente}")
    public ResponseEntity<?> show(@PathVariable String idCliente){
        
        Cliente cliente = null;
        Map<String, Object> response = new HashMap<>();
        try{
            cliente = clienteService.findById(idCliente);
        }
        catch(DataAccessException e){
            response.put("mensaje", "Error al realizar la consulta en la BD");
            response.put("error",e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        
        if(cliente == null){
            response.put("mensaje", "Cliente con CC ".concat(idCliente).concat("no existe en la BD"));
            return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
            
        }
        
        return new ResponseEntity<>(cliente, HttpStatus.OK);
            
        
    
    }
    
    @PostMapping("/clientes")
    public ResponseEntity<?> create(@RequestBody Cliente cliente){
        
        Cliente clienteNuevo = null;
        Map<String, Object> response = new HashMap<>();
        try{
            cliente.setFechaCreacion((new Date().toString()));
            clienteNuevo = clienteService.save(cliente);
        
        }
        catch(DataAccessException e){
            response.put("mensaje","Error al crear registro en la BD");
            response.put("error",e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
            
            
        }
        
        response.put("mensaje","Cliente creado exitosamente");
        response.put("cliente",clienteNuevo);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
        
        
    
    }
    
    @DeleteMapping("/clientes/{idCliente}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable String idCliente){
        clienteService.delete(idCliente);
    }
    
    @PutMapping("clientes/{idCliente}")
    @ResponseStatus(HttpStatus.CREATED)
    public Cliente update(@RequestBody Cliente cliente, @PathVariable String idCliente){
        Cliente clienteActual = clienteService.findById(idCliente);
        clienteActual.setNombres(cliente.getNombres());
        clienteActual.setApellidos(cliente.getApellidos());
        clienteActual.setDireccion(cliente.getDireccion());
        clienteActual.setMunicipio(cliente.getMunicipio());
        clienteActual.setDepartamento(cliente.getDepartamento());
        clienteActual.setTelefono(cliente.getTelefono());
        clienteActual.setEmail(cliente.getEmail());
        clienteActual.setEdad(cliente.getEdad());
        clienteActual.setCaracteristicas(cliente.getCaracteristicas());
        clienteActual.setSexo(cliente.getSexo());
        System.out.println("cliente actual sex=: " +clienteActual.getSexo());
        
        System.out.println("cliente actual id=: " +clienteActual.getIdCliente());
        
        return clienteService.save(clienteActual);
    
    }
    
    
    

    
}
