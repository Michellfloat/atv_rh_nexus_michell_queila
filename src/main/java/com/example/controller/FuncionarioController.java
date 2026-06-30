package com.example.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.dto.FuncionarioRequestDTO;
import com.example.dto.FuncionarioResponseDTO;
import com.example.service.FuncionarioService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/funcionarios")
@CrossOrigin(origins = "*")
public class FuncionarioController {
    @Autowired
    private FuncionarioService funcionarioService;

    @GetMapping
    ResponseEntity<List<FuncionarioResponseDTO>>listar(){
        return ResponseEntity.status(HttpStatus.OK).body(funcionarioService.listarFuncionarios());
    }

    @PostMapping
    public ResponseEntity<Map<String,Object>>salvar(@Valid @RequestBody FuncionarioRequestDTO funcionarioDTO){
        funcionarioService.salvarFuncionarios(funcionarioDTO);

        return ResponseEntity.status(HttpStatus.CREATED).body(Map.of("mensagem","Colaborador salvo com sucesso!"));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Map<String,Object>>atualizar(@PathVariable Long id, @Valid @RequestBody FuncionarioRequestDTO funcionarioDTO){
        funcionarioService.atualizarFuncionarios(id, funcionarioDTO);

        return ResponseEntity.status(HttpStatus.OK).body(Map.of("mensagem","Colaborador atualizado com sucesso!"));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String,Object>>deletar(@PathVariable Long id){
        funcionarioService.deletarFuncionarios(id);

        return ResponseEntity.status(HttpStatus.OK).body(Map.of("mensagem","Colaborador deletado com sucesso!"));
    }
}
