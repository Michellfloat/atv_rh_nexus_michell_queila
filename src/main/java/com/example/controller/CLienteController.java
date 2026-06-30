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

import com.example.dto.ClienteRequestDTO;
import com.example.dto.ClienteResponseDTO;
import com.example.service.ClienteService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/clientes")
@CrossOrigin(origins = "*")
public class CLienteController {
    @Autowired
    private ClienteService clienteService;

    @GetMapping
    ResponseEntity<List<ClienteResponseDTO>>listar(){
        return ResponseEntity.status(HttpStatus.OK).body(clienteService.listarClientes());
    }

    @PostMapping
    public ResponseEntity<Map<String,Object>>salvar(@Valid @RequestBody ClienteRequestDTO clienteDTO){
        clienteService.salvarClientes(clienteDTO);

        return ResponseEntity.status(HttpStatus.CREATED).body(Map.of("mensagem","Cliente salvo com sucesso!"));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Map<String,Object>>atualizar(@PathVariable Long id, @Valid @RequestBody ClienteRequestDTO clienteDTO){
        clienteService.atualizarClientes(id, clienteDTO);

        return ResponseEntity.status(HttpStatus.OK).body(Map.of("mensagem","Cliente atualizado com sucesso!"));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String,Object>>deletar(@PathVariable Long id){
        clienteService.deletarClientes(id);

        return ResponseEntity.status(HttpStatus.OK).body(Map.of("mensagem","Cliente deletado com sucesso!"));
    }
}
