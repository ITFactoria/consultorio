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
import com.itfactoria.rest.webservices.restfulwebservices.models.dao.IClienteDAO;

/**
 *
 * @author jaironino
 */
@CrossOrigin(origins="http://localhost:5000")

@RestController
public class ClienteJPAResource {
    
    @Autowired
    private Clientes clientes;
    
    @Autowired
    private IClienteDAO ClienteJPARepository;
    
    /*@GetMapping("/jpa/clientes")
    public List<Cliente> getClientes(){
        return ClienteJPARepository.findAll();
        //return clientes.getClientes();
    
    }*/
    
    //GET /clientes/{id}
    @GetMapping("/jpa/clientes/{idCliente}")
    public Cliente getCliente(@PathVariable String idCliente){
        return ClienteJPARepository.findById(idCliente).get();
        //return clientes.getClienteById(idCliente);
    
    }
    
    //DELETE /clientes/{idCliente}
    @DeleteMapping("/jpa/clientes/{idCliente}")
    public ResponseEntity<Void> deleteCliente(@PathVariable String idCliente){
        ClienteJPARepository.deleteById(idCliente);
        //Cliente cliente = clientes.deleteCliente(idCliente);
        /*if(cliente != null){
            return ResponseEntity.noContent().build();
        }
        else {
            return ResponseEntity.notFound().build();}*/
        return ResponseEntity.noContent().build();
    }
    
    //UPDATE /clientes/{idCliente}
    @PutMapping("/jpa/clientes/{idCliente}")
    public ResponseEntity<Cliente> updateCliente(@PathVariable String idCliente, @RequestBody Cliente cliente){
        //clientes.updateCliente(cliente);
        
        Cliente updatedCliente = ClienteJPARepository.save(cliente);
        
        //ClienteJPARepository.save(cliente);
        return new ResponseEntity<Cliente>(cliente, HttpStatus.OK);
        
    }
    
    //ADD  /clientes/
    @PostMapping("/jpa/clientes")
    public ResponseEntity<Void> addCliente(@RequestBody Cliente cliente){
        //Cliente addedCliente = clientes.addCliente(cliente);
        Cliente addedCliente = ClienteJPARepository.save(cliente);
        
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{idCliente}").buildAndExpand(addedCliente.getIdCliente()).toUri();
        return ResponseEntity.created(uri).build();
        
    }
    
    
    
}
