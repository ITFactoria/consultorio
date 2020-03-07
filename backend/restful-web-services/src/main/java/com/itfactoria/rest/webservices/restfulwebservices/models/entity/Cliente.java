/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.itfactoria.rest.webservices.restfulwebservices.models.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import static javax.persistence.TemporalType.DATE;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
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
    @Size(min=3, max=100)
    private String nombres;
    
    @NotEmpty
    @Size(min=3, max=100)
    private String apellidos;
    
    @NotEmpty
    @Size(min=4, max=100)
    private String direccion;
    
    //@NotNull(message="El Municipo es requerido")
    //@Size(min=4, max=100)
    //@ManyToOne(fetch = FetchType.LAZY)
    //@JoinColumn(name = "municipio_id")
    //@JsonIgnoreProperties({"hibernateLazyInitializer","handler"})
    //private Municipio municipio;
    //private String municipio;
    
    //private String departamento;
    
    @NotEmpty
    @Size(min=4, max=10)
    private String telefono;
    
    /*@Email
    private String email;*/
    
    @NotEmpty
    @Size(min=1, max=1)
    private String sexo;
    
    //@NotNull
    //@Temporal(DATE)
    //private Date fechaNacimiento;
    
    @Size(min=4, max=200)
    private String caracteristicas;
    
    @NotNull (message = "Fecha creacion no puede estar vacia")
    @Temporal(DATE)
    private Date fechaCreacion;
    
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "cliente", cascade = CascadeType.ALL)
    //@JoinColumn(name="cita_id")
    @JsonIgnoreProperties({"cliente","hibernateLazyInitializer","handler"})
    private List<Cita> citas;
    
    
    
    /*@NotEmpty
    private String fechaCreacion;
    */
    
    /*@Prepersist
    public void prePersist(){
        fechaCreacion = new Date();
    }*/
    
    
    public Cliente() {
        this.citas = new ArrayList<>();
    }
    
    

    /*public Cliente(String idCliente, String nombres, String apellidos, String direccion, Municipio municipio, String departamento, String telefono, String email, String sexo, Date fechaNacimiento, String caracteristicas, Date fechaCreacion) {
        this.idCliente = idCliente;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.direccion = direccion;
        this.municipio = municipio;
        this.departamento = departamento;
        this.telefono = telefono;
        this.email = email;
        this.sexo = sexo;
        this.fechaNacimiento = fechaNacimiento;
        this.caracteristicas = caracteristicas;
        this.fechaCreacion = fechaCreacion;
    }*/

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

    /*public void setMunicipio(Municipio municipio) {
        this.municipio = municipio;
    }*/
    
    /*public void setMunicipio(String municipio) {
        this.municipio = municipio;
    }*/
    

    /*public void setDepartamento(String departamento) {
        this.departamento = departamento;
    }*/

    public void setFechaCreacion(Date fechaCreacion) {
        this.fechaCreacion = fechaCreacion;
    }

    /*public void setEmail(String email) {
        this.email = email;
    }*/

    public void setSexo(String sexo) {
        this.sexo = sexo;
    }

    /*
    public void setfechaNacimiento(Date fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
    }*/

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

    /*public Municipio getMunicipio() {
        return municipio;
    }*/
    
    /*public String getMunicipio() {
        return municipio;
    }*/
    

    /*public String getDepartamento() {
        return departamento;
    }*/

    /*public String getEmail() {
        return email;
    }*/

    public String getSexo() {
        return sexo;
    }

    /*public Date getfechaNacimiento() {
        return fechaNacimiento;
    }*/

    public String getCaracteristicas() {
        return caracteristicas;
    }

    public Date getFechaCreacion() {
        return fechaCreacion;
    }

    public List<Cita> getCitas() {
        return citas;
    }

    public void setCitas(List<Cita> citas) {
        this.citas = citas;
    }

    
    

}
