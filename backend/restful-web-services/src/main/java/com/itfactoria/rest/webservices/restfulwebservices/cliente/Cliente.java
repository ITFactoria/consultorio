/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.itfactoria.rest.webservices.restfulwebservices.cliente;

/**
 *
 * @author jaironino
 */
public class Cliente {

    
    public String id;
    public String nombres;
    public String apellidos;
    public String direccion;
    public String telefono;
    public String municipio;
    public String fechaCreacion;
    
    public Cliente(String id, String nombres, String apellidos, String direccion, String telefono, String municipio, String fechaCreacion) {
        this.id = id;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.direccion = direccion;
        this.telefono = telefono;
        this.municipio = municipio;
        this.fechaCreacion = fechaCreacion;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setNombres(String nombres) {
        this.nombres = nombres;
    }

    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public void setMunicipio(String municipio) {
        this.municipio = municipio;
    }

    public void setFechaCreacion(String fechaCreacion) {
        this.fechaCreacion = fechaCreacion;
    }
    
    

    public String getId() {
        return id;
    }

    public String getNombres() {
        return nombres;
    }

    public String getApellidos() {
        return apellidos;
    }

    public String getDireccion() {
        return direccion;
    }

    public String getTelefono() {
        return telefono;
    }

    public String getMunicipio() {
        return municipio;
    }

    public String getFechaCreacion() {
        return fechaCreacion;
    }
    
}
