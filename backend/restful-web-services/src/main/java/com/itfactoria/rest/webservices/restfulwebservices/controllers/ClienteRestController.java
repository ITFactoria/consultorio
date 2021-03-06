/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.itfactoria.rest.webservices.restfulwebservices.controllers;

import com.itfactoria.rest.webservices.restfulwebservices.models.entity.Cliente;
import com.itfactoria.rest.webservices.restfulwebservices.models.entity.Municipio;
import com.itfactoria.rest.webservices.restfulwebservices.models.services.IClienteService;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import javax.validation.Valid;
import org.hibernate.exception.DataException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
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
@CrossOrigin(origins = {"http://localhost:5000","*"})

public class ClienteRestController {

    @Autowired
    private IClienteService clienteService;

    @GetMapping("/clientes")
    @ResponseStatus(HttpStatus.OK)
    public List<Cliente> index() {
        return clienteService.findAll();
    }

    @GetMapping("/clientes/{idCliente}")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<?> show(@PathVariable String idCliente) {

        Cliente cliente = null;
        Map<String, Object> response = new HashMap<>();
        try {
            cliente = clienteService.findById(idCliente);
        } catch (DataAccessException e) {
            response.put("mensaje", "Error al realizar la consulta en la BD");
            response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }

        if (cliente == null) {
            response.put("mensaje", "El paciente con CC ".concat(idCliente).concat(" no existe."));
            return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);

        }

        return new ResponseEntity<>(cliente, HttpStatus.OK);

    }

    //Add cliente
    @PostMapping("/clientes")
    public ResponseEntity<?> create(@Valid @RequestBody Cliente cliente, BindingResult result) {

        Cliente clienteNuevo = null;
        Map<String, Object> response = new HashMap<>();

        if (result.hasErrors()) {
            List<String> errors = result.getFieldErrors().
                    stream().
                    map(error -> "El campo '" + error.getField() + "' " + error.getDefaultMessage())
                    .collect(Collectors.toList());
            response.put("errors", errors);
            return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
        }

        try {
            cliente.setFechaCreacion(new Date());
            clienteNuevo = clienteService.save(cliente);

        } catch (DataAccessException e) {
            response.put("mensaje", "Error al crear registro en la BD");
            response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);

        }

        response.put("mensaje", "El paciente fue creado exitosamente");
        response.put("cliente", clienteNuevo);
        return new ResponseEntity<>(response, HttpStatus.CREATED);

    }

    @DeleteMapping("/clientes/{idCliente}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public ResponseEntity<?> delete(@PathVariable String idCliente) {

        Map<String, Object> response = new HashMap<>();

        try {
            clienteService.delete(idCliente);

        } catch (DataAccessException dae) {
            response.put("mensaje", "Error al eliminar paciente.");
            response.put("Error", dae.getMessage().concat(": ").concat(dae.getMostSpecificCause().getMessage()));
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);

        }

        response.put("mensaje", "El paciente fue eliminado exitosamente");

        return new ResponseEntity<>(response, HttpStatus.OK);

    }

    
    //Update cliente
    @PutMapping("clientes/{idCliente}")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<?> update(@Valid @RequestBody Cliente cliente, BindingResult result, @PathVariable String idCliente) {

        Map<String, Object> response = new HashMap<>();
        Cliente clienteActualizado = null;
        
        if(result.hasErrors()){
            List<String> errors = result.getFieldErrors().
                    stream().
                    map(error ->"El campo '"+error.getField() + "' " + error.getDefaultMessage()).
                    collect(Collectors.toList());
            response.put("errors", errors);
            return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
            
        
        }
        

        Cliente clienteActual = clienteService.findById(idCliente);

        if (clienteActual == null) {
            response.put("mensaje", "Error. Paciente con CC".concat(idCliente).concat("no encontrado"));
            return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);

        } else {
            try {
                clienteActual.setNombres(cliente.getNombres());
                clienteActual.setApellidos(cliente.getApellidos());
                clienteActual.setDireccion(cliente.getDireccion());
                //clienteActual.setMunicipio(cliente.getMunicipio());
                //clienteActual.setDepartamento(cliente.getDepartamento());
                clienteActual.setTelefono(cliente.getTelefono());
                //clienteActual.setEmail(cliente.getEmail());
                //clienteActual.setfechaNacimiento(cliente.getfechaNacimiento());
                clienteActual.setCaracteristicas(cliente.getCaracteristicas());
                clienteActual.setSexo(cliente.getSexo());
                clienteActualizado = clienteService.save(clienteActual);

            } catch (DataAccessException dae) {
                response.put("mensaje", "Error al actualizar paciente");
                response.put("error", dae.getMessage().concat(": ").concat(dae.getMostSpecificCause().getMessage()));
                return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
            }

            response.put("mensaje", "El paciente fue actualizado exitosamente");
            response.put("cliente", clienteActualizado);
            return new ResponseEntity<>(response, HttpStatus.CREATED);

        }

    }
    
    @GetMapping("/clientes/municipios")
    public List<Municipio>listMunicipios(){
        return clienteService.findAllMunicipios();
    
    }

}
