package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dto.ClienteRequestDTO;
import com.example.dto.ClienteResponseDTO;
import com.example.model.ClienteModel;
import com.example.repository.ClienteRepository;

import jakarta.transaction.Transactional;

@Service
public class ClienteService {
    @Autowired
    private ClienteRepository clienteRepository;

    

    public ClienteModel salvarClientes(ClienteRequestDTO cliente){
        if (clienteRepository.findByEmail(cliente.getEmail()).isPresent()) {
            throw new RuntimeException("cliente já cadastrado!");
        }
        ClienteModel novCliente = new ClienteModel();
        novCliente.setNome(cliente.getNome());
        novCliente.setCpf(cliente.getCpf());
        novCliente.setEmail(cliente.getEmail());
        novCliente.setTelefone(cliente.getTelefone());
        

        return clienteRepository.save(novCliente);
    }

    public List<ClienteResponseDTO>listarClientes(){
        return clienteRepository.findAll().stream().map(c -> new ClienteResponseDTO(c.getNome(),c.getEmail(),c.getTelefone())).toList();
    }

    @Transactional
    public ClienteResponseDTO atualizarClientes(Long id, ClienteRequestDTO cliente){
        ClienteModel clienteExiste = clienteRepository.findById(id).orElseThrow(()-> new IllegalArgumentException("Este cliente não existe!"));
        
        clienteExiste.setNome(cliente.getNome());
        clienteExiste.setEmail(cliente.getEmail());
        clienteExiste.setCpf(cliente.getCpf());
        clienteExiste.setTelefone(cliente.getTelefone());
        
        ClienteModel atualizado = clienteRepository.save(clienteExiste);

        return new ClienteResponseDTO(atualizado.getNome(),atualizado.getEmail(),atualizado.getTelefone());
    }

    @Transactional
    public void deletarClientes(Long id){
        if (!clienteRepository.existsById(id)) {
            throw new RuntimeException("Este cliente não existe!");
        }
        clienteRepository.deleteById(id);
    }
}
