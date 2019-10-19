/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.itfactoria.rest.webservices.restfulwebservices;

/**
 *
 * @author jaironino
 */
public class getClientesBean {
    
    String mensaje;

    public getClientesBean(String mensaje) {
        this.mensaje = mensaje;
    }

    public String getMensaje() {
        return mensaje;
    }

    public void setMensaje(String mensaje) {
        this.mensaje = mensaje;
    }

    @Override
    public String toString() {
        return "getClientesBean{" + "mensaje=" + mensaje + '}';
    }
    
    
    
    
}
