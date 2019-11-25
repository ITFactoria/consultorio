/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.itfactoria.rest.webservices.restfulwebservices.models.entity;

import java.net.URI;
import java.util.List;
import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

/**
 *
 * @author jaironino
 */
@CrossOrigin(origins="http://localhost:5000")

@RestController
public class ClienteResource {
    
    @Autowired
    private Clientes clientes;
    
    @GetMapping("/clientes")
    public List<Cliente> getClientes(){
        return clientes.getClientes();
    
    }
    
    //GET /clientes/{id}
    @GetMapping("/clientes/{idCliente}")
    public Cliente getCliente(@PathVariable String idCliente){
        return clientes.getClienteById(idCliente);
    
    }
    
    //DELETE /clientes/{idCliente}
    @DeleteMapping("/clientes/{idCliente}")
    public ResponseEntity<Void> deleteCliente(@PathVariable String idCliente){
        Cliente cliente = clientes.deleteCliente(idCliente);
        if(cliente != null){
            return ResponseEntity.noContent().build();
        }
        else {
            return ResponseEntity.notFound().build();}
    }
    
    //UPDATE /clientes/{idCliente}
    @PutMapping("/clientes/{idCliente}")
    public ResponseEntity<Cliente> updateCliente(@PathVariable String idCliente, @RequestBody Cliente cliente){
        
        clientes.updateCliente(cliente);
        return new ResponseEntity<Cliente>(cliente, HttpStatus.OK);
        
    }
    
    //ADD  /clientes/
    @PostMapping("/clientes")
    public ResponseEntity<Cliente> addCliente(@RequestBody Cliente cliente){
        Cliente addedCliente = clientes.addCliente(cliente);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{idCliente}").buildAndExpand(addedCliente.getIdCliente()).toUri();
        return ResponseEntity.created(uri).build();
        
    }
    
    
    
}
