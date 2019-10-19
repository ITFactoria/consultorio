/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.itfactoria.rest.webservices.restfulwebservices.cliente;

import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Service;

/**
 *
 * @author jaironino
 */
@Service
public class Clientes {
    
    private static List<Cliente> clientes = new ArrayList();
    private static int idCounter = 0;
    
    static{
        clientes.add(new Cliente("79514933", "malcom arturo", "conzales lizarazo", "carrara 13 calle 45 67", "12345678", "Barbosa", "1/13/1969"));
        clientes.add(new Cliente("32468770", "maria concepcion", "pibe valderrama", "carrara 13 calle 45 67", "12345678", "Barbosa", "1/13/1969"));
        clientes.add(new Cliente("8906523120", "claudia liliana", "redy rincon", "carrara 13 calle 45 67", "12345678", "Itagui", "11/01/1969"));
        clientes.add(new Cliente("1234567890123", "yormary xiloedi", "conzales lizarazo", "carrara 13 calle 45 67", "12345678", "Sabaneta", "11/01/1969"));
        clientes.add(new Cliente("1987645673779", "cusumba antonia", "conzales lizarazo", "carrara 13 calle 45 67", "12345678", "Fredonia", "11/01/1969"));
        clientes.add(new Cliente("3245678", "gulupa freijoa", "tomate zanahoria", "carrara 13 calle 45 67", "12345678", "Rionegro", "11/01/1969"));
        
        
        
    }
    
    public List<Cliente> getClientes(){
        return clientes;
    
    }
    
}
