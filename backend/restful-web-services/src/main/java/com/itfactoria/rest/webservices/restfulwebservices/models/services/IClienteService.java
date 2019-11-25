/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.itfactoria.rest.webservices.restfulwebservices.models.services;

import com.itfactoria.rest.webservices.restfulwebservices.models.entity.Cliente;
import java.util.List;

/**
 *
 * @author jaironino
 */
public interface IClienteService {
    public List<Cliente> findAll();
    public Cliente findById(String idCliente);
    public void delete(String idCliente);
    public Cliente save(Cliente cliente);
    
}
