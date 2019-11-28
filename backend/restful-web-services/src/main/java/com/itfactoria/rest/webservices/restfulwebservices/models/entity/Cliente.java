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
import javax.validation.constraints.Digits;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

/**
 *
 * @author jaironino
 */
@Entity
@Table(name="clientes")
public class Cliente implements Serializable{

    @Id
    @Column(nullable = false, unique = true)       
    String idCliente;
    @Column(nullable = false)
    
    @NotEmpty
    @Size(min=4, max=100)
    private String nombres;
    
    @NotEmpty
    @Size(min=4, max=100)
    private String apellidos;
    
    @NotEmpty
    @Size(min=4, max=100)
    private String direccion;
    
    @NotEmpty
    @Size(min=4, max=100)
    @Column(nullable = false)       
    private String municipio;
    
    @NotEmpty
    @Size(min=4, max=100)
    private String departamento;
    
    @NotEmpty
    @Size(min=4, max=10)
    private String telefono;
    
    @Email
    private String email;
    
    @NotEmpty
    @Size(min=1, max=1)
    
    private String sexo;
    
    //@NotEmpty
    //@Size(min=1, max=2)
    @Digits(integer = 2, fraction = 0, message = "La edad debe estar entre 1 y 99 años")
    private int edad;
    
    @NotEmpty
    @Size(min=4, max=200)
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
