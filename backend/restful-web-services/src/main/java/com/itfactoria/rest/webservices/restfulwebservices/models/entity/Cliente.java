/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.itfactoria.rest.webservices.restfulwebservices.models.entity;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 *
 * @author jaironino
 */
@Entity
@Table(name="clientes")
public class Cliente implements Serializable{

    @Id
    //@Column(nullable = false, unique = true)       
    String idCliente;
    //@Column(nullable = false)
    private String nombres;
    private String apellidos;
    private String direccion;
    private String municipio;
    private String departamento;
    private String telefono;
    //@Column(nullable = false, unique = true)       
    private String email;
    private String sexo;
    private int edad;
    private String caracteristicas;
    private String fechaCreacion;

    public Cliente() {
    }
    
    

    public Cliente(String idCliente, String nombres, String apellidos, String direccion, String municipio, String departamento, String telefono, String email, String sexo, int edad, String caracteristicas, String fechaCreacion) {
        this.idCliente = idCliente;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.direccion = direccion;
        this.municipio = municipio;
        this.departamento = departamento;
        this.telefono = telefono;
        this.email = email;
        this.sexo = sexo;
        this.edad = edad;
        this.caracteristicas = caracteristicas;
        this.fechaCreacion = fechaCreacion;
    }

    public void setIdCliente(String idCliente) {
        this.idCliente = idCliente;
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

    public void setDepartamento(String departamento) {
        this.departamento = departamento;
    }

    public void setFechaCreacion(String fechaCreacion) {
        this.fechaCreacion = fechaCreacion;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setSexo(String sexo) {
        this.sexo = sexo;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }

    public void setCaracteristicas(String caracteristicas) {
        this.caracteristicas = caracteristicas;
    }

    public String getIdCliente() {
        return idCliente;
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

    public String getDepartamento() {
        return departamento;
    }

    public String getEmail() {
        return email;
    }

    public String getSexo() {
        return sexo;
    }

    public int getEdad() {
        return edad;
    }

    public String getCaracteristicas() {
        return caracteristicas;
    }

    public String getFechaCreacion() {
        return fechaCreacion;
    }

}
