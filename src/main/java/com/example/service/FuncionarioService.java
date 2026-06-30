package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dto.FuncionarioRequestDTO;
import com.example.dto.FuncionarioResponseDTO;
import com.example.model.FuncionarioModel;
import com.example.repository.FuncionarioRepository;

import jakarta.transaction.Transactional;

@Service
public class FuncionarioService {
    @Autowired

    private FuncionarioRepository funcionarioRepository;

    

    public FuncionarioModel salvarFuncionarios(FuncionarioRequestDTO funcionario){
        if (funcionarioRepository.findByEmail(funcionario.getEmail()).isPresent()) {
            throw new RuntimeException("funcionario já cadastrado!");
        }
        FuncionarioModel novFuncionario = new FuncionarioModel();
        novFuncionario.setNome(funcionario.getNome());
        novFuncionario.setEmail(funcionario.getEmail());
        novFuncionario.setTelefone(funcionario.getTelefone());
        novFuncionario.setCargo(funcionario.getCargo());
        novFuncionario.setSetor(funcionario.getSetor());
        
        

        return funcionarioRepository.save(novFuncionario);
    }

    public List<FuncionarioResponseDTO>listarFuncionarios(){
        return funcionarioRepository.findAll().stream().map(f -> new FuncionarioResponseDTO(f.getNome(),f.getEmail(),f.getTelefone(),f.getCargo(),f.getSetor())).toList();
    }

    @Transactional
    public FuncionarioResponseDTO atualizarFuncionarios(Long id, FuncionarioRequestDTO funcionario){
        FuncionarioModel funcionarioExiste = funcionarioRepository.findById(id).orElseThrow(()-> new IllegalArgumentException("Este funcionário não existe!"));
        
        funcionarioExiste.setNome(funcionario.getNome());
        funcionarioExiste.setEmail(funcionario.getEmail());
        funcionarioExiste.setTelefone(funcionario.getTelefone());
        funcionarioExiste.setCargo(funcionario.getCargo());
        funcionarioExiste.setSetor(funcionario.getSetor());
        
        FuncionarioModel atualizado = funcionarioRepository.save(funcionarioExiste);

        return new FuncionarioResponseDTO(atualizado.getNome(),atualizado.getEmail(),atualizado.getTelefone(),atualizado.getCargo(),atualizado.getSetor());
    }

    @Transactional
    public void deletarFuncionarios(Long id){
        if (!funcionarioRepository.existsById(id)) {
            throw new RuntimeException("Este funcionário não existe!");
        }
        funcionarioRepository.deleteById(id);
    }

}
