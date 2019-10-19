/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.itfactoria.rest.webservices.restfulwebservices.cliente;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

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
    
    
}
