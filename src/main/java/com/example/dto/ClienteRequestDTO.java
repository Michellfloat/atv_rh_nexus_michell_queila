package com.example.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class ClienteRequestDTO {
    @NotBlank(message = "Nome é obrigatório")
     @Size(min = 15, message = "O nome deve ter no mínimo 15 caracteres")
    @Size(max = 200, message = "O nome deve ter no máximo 200 caracteres")
    private String nome;

    @Email(message = "Deve ser inserido um E-mail válido!")
    private String email;

    @NotBlank(message = "O CPF é obrigatório!")
    @Size(min = 14, max = 14, message = "O CPF deve seguir o padrão XXX.XXX.XXX-XX")
    private String cpf;

    @NotBlank(message = "O Telefone é obrigatório!")
    @Size(max = 16, message = "O CPF deve seguir o padrão (XX) X XXXX-XXXX")
    private String telefone;

    public ClienteRequestDTO() {
    }

    public ClienteRequestDTO(
            @NotBlank(message = "Nome é obrigatório") @Size(min = 15, message = "O nome deve ter no mínimo 15 caracteres") @Size(max = 200, message = "O nome deve ter no máximo 200 caracteres") String nome,
            @Email(message = "Deve ser inserido um E-mail válido!") String email,
            @NotBlank(message = "O CPF é obrigatório!") @Size(min = 14, max = 14, message = "O CPF deve seguir o padrão XXX.XXX.XXX-XX") String cpf,
            @NotBlank(message = "O Telefone é obrigatório!") @Size(max = 16, message = "O CPF deve seguir o padrão (XX) X XXXX-XXXX") String telefone) {
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    
}
