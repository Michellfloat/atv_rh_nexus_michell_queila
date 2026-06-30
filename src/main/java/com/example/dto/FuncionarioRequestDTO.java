package com.example.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class FuncionarioRequestDTO {
    @NotBlank(message = "Nome é obrigatório")
     @Size(min = 15, message = "O nome deve ter no mínimo 15 caracteres")
    @Size(max = 200, message = "O nome deve ter no máximo 200 caracteres")
    private String nome;

    @Email(message = "Deve ser inserido um E-mail válido!")
    private String email;

    @NotBlank(message = "O Telefone é obrigatório!")
    @Size(max = 16, message = "O CPF deve seguir o padrão (XX) X XXXX-XXXX")
    private String telefone;

    @NotBlank(message = "O cargo é obrigatório!")
    private String cargo;

    @NotBlank(message = "O setor é obrigatório")
    private String setor;

    public FuncionarioRequestDTO() {
    }

    public FuncionarioRequestDTO(
            @NotBlank(message = "Nome é obrigatório") @Size(min = 15, message = "O nome deve ter no mínimo 15 caracteres") @Size(max = 200, message = "O nome deve ter no máximo 200 caracteres") String nome,
            @Email(message = "Deve ser inserido um E-mail válido!") String email,
            @NotBlank(message = "O Telefone é obrigatório!") @Size(max = 16, message = "O CPF deve seguir o padrão (XX) X XXXX-XXXX") String telefone,
            @NotBlank(message = "O cargo é obrigatório!") String cargo,
            @NotBlank(message = "O setor é obrigatório") String setor) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.cargo = cargo;
        this.setor = setor;
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

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public String getCargo() {
        return cargo;
    }

    public void setCargo(String cargo) {
        this.cargo = cargo;
    }

    public String getSetor() {
        return setor;
    }

    public void setSetor(String setor) {
        this.setor = setor;
    }

    
}
