/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.itfactoria.rest.webservices.restfulwebservices;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author jaironino
 */

//Controller
@CrossOrigin(origins="http://localhost:5000")
@RestController
public class ConsultorioController {
    
    
    //GET
    //URI - /consultorio
    //method 
    
    @GetMapping(path = "/consultorio")
    public String getClientes(){
        return "hello clientes 42";
    }
    
    @GetMapping(path = "/consultorio-bean")
    public getClientesBean getClientesBean(){
        
        return new getClientesBean("Hola clientes Bean");
    }
    
    @GetMapping(path = "/consultorio-bean/path-variable/{name}")
    public getClientesBean getClientesBeanPathVariable (@PathVariable String name){
        
        return new getClientesBean(String.format("Hola clientes Bean, %s", name));
    }
    
    
}
