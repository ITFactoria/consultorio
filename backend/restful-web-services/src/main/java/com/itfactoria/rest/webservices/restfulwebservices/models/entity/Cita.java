/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.itfactoria.rest.webservices.restfulwebservices.models.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import static javax.persistence.TemporalType.DATE;

/**
 *
 * @author jaironino
 */

@Entity
@Table(name="citas")
public class Cita implements Serializable {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name="fecha_asignacion")
    @Temporal(DATE)
    private Date fechaAsignacion;
    
    /*
    Estado de la cita
    0: Asignada
    1: Atendida
    */
    @Column(name="estado_cita")
    private boolean estadoCita;
    
    
    @ManyToOne(fetch = FetchType.LAZY)
    //@JoinColumn(name="cliente_id")
    @JsonIgnoreProperties({"citas","hibernateLazyInitializer","handler"})
    private Cliente cliente;
    //private String idCliente;


    public Cita() {
    }

    public Cita(long id, Date fechaAsignacion, boolean estadoCita, Cliente cliente) {
        this.id = id;
        this.fechaAsignacion = fechaAsignacion;
        this.estadoCita = estadoCita;
        this.cliente = cliente;
    }
    
    
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getFechaAsignacion() {
        return fechaAsignacion;
    }

    public void setFechaAsignacion(Date fechaAsignacion) {
        this.fechaAsignacion = fechaAsignacion;
    }

    public boolean isEstadoCita() {
        return estadoCita;
    }

    public void setEstadoCita(boolean estadoCita) {
        this.estadoCita = estadoCita;
    }
    
    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    
}
