/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.itfactoria.rest.webservices.restfulwebservices.models.services;

import com.itfactoria.rest.webservices.restfulwebservices.models.dao.IClienteDAO;
import com.itfactoria.rest.webservices.restfulwebservices.models.entity.Cliente;
import com.itfactoria.rest.webservices.restfulwebservices.models.entity.Municipio;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author jaironino
 */
@Service
public class ClienteServiceImpl implements IClienteService {

    @Autowired
    private IClienteDAO clienteDAO;

    @Override
    public List<Cliente> findAll() {
        return (List<Cliente>) clienteDAO.findAll();

    }

    @Override
    @Transactional(readOnly = true)
    public Cliente findById(String idCliente) {
        return clienteDAO.findById(idCliente).orElse(null);

    }

    @Override
    public void delete(String idCliente) {
        clienteDAO.deleteById(idCliente);

    }

    @Override
    public Cliente save(Cliente cliente) {
        return clienteDAO.save(cliente);
        
    
    }

    @Override
    @Transactional(readOnly = true)
    public List<Municipio> findAllMunicipios() {
        return clienteDAO.findAllMunicipios();
        
    }

}
