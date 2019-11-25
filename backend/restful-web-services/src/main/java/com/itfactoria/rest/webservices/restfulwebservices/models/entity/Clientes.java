/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.itfactoria.rest.webservices.restfulwebservices.models.entity;

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
        clientes.add(new Cliente("79514933", "malcom arturo", "conzales lizarazo", "carrara 13 calle 45 67", "Barbosa","Antioquia","12345678","correo@gmail.com","M",63,"Gripa", "1/13/1969"));
        clientes.add(new Cliente("32468770", "maria concepcion", "pibe valderrama", "carrara 13 calle 45 67",  "Barbosa","Antioquia","12345678","correo@gmail.com","M",33,"Gripa", "1/13/1969"));
        clientes.add(new Cliente("8906523120", "claudia liliana", "redy rincon", "carrara 13 calle 45 67",  "Itagui","Antioquia","12345678","correo@gmail.com","M",33,"Tuberculosis", "11/01/1969"));
        clientes.add(new Cliente("1234567890123", "yormary xiloedi", "conzales lizarazo", "carrara 13 calle 45 67",  "Sabaneta","Antioquia","12345678", "correo@gmail.com","M",33,"Tuberculosis","11/01/1969"));
        clientes.add(new Cliente("1987645673779", "cusumba antonia", "conzales lizarazo", "carrara 13 calle 45 67",  "Fredonia","Antioquia","12345678", "correo@gmail.com","M",33,"Tuberculosis","11/01/1969"));
        clientes.add(new Cliente("3245678", "gulupa freijoa", "tomate zanahoria", "carrara 13 calle 45 67",  "Rionegro","Antioquia","12345678","correo@gmail.com","M",33,"Tuberculosis", "11/01/1969"));
        clientes.add(new Cliente("32456798", "gulupa freijoa", "tomate zanahoria", "carrara 13 calle 45 67", "Rionegro","Antioquia","12345678","correo@gmail.com","M",33,"Tuberculosis", "11/01/1969"));
        clientes.add(new Cliente("32456708", "banana naranja", "remolacha repollo", "carrara 13 calle 45 67", "Rionegro","Antioquia","12345678","correo@gmail.com","M",33,"Tuberculosis", "11/01/1969"));
        clientes.add(new Cliente("32456768", "zanahoria rugula", "coliflor maria", "carrara 13 calle 45 67", "Rionegro","Antioquia","12345678","correo@gmail.com","M",33,"Tuberculosis", "11/01/1969"));
        clientes.add(new Cliente("13131313", "platano verde", "chorizo chicharron", "carrara 13 calle 45 67", "Rionegro","Antioquia","12345678","correo@gmail.com","M",33,"Tuberculosis", "11/01/1969"));
        
        
    }
    
    public List<Cliente> getClientes(){
        return clientes;
    
    }
    
    public Cliente getClienteById(String id){
        for(Cliente cliente: clientes){
            if(cliente.idCliente.equals(id)){
                return cliente;
            }
            
        }
        return null;
    }
    
    public Cliente deleteCliente(String id){
        
        Cliente cliente = getClienteById(id);
        
        if(cliente == null){
            return null;
        }
        else{
            if(clientes.remove(cliente)){
                return cliente;
            }
            else{
                return null;
            }
        }
    }
    
    public Cliente updateCliente(Cliente cliente){
        if(cliente.getIdCliente()!=null){
            deleteCliente(cliente.getIdCliente());
            clientes.add(cliente);
            return cliente;
        }
        else{return null;}
    }
    
    public Cliente addCliente(Cliente cliente){
        clientes.add(cliente);
        return cliente;
        
        
    }

    
}
