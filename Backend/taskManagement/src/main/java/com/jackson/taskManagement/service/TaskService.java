package com.jackson.taskManagement.service;

import com.jackson.taskManagement.model.Task;
import com.jackson.taskManagement.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TaskService {
    @Autowired
    private TaskRepository taskRepository;
    public Task addTask(Task task) {
        return taskRepository.save(task);
    }

    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    public String deleteTask(Integer id) {
        Optional<Task> task = taskRepository.findById(id);
        if (task.isPresent())
        {
            taskRepository.delete(task.get());
            return "Success";
        }
        else {
            return "Task Does Not Exist with id: "+id;
        }
    }

    public String deleteAll() {
        try{
            taskRepository.deleteAll();
            return "Success";
        }catch (Exception e)
        {
            return "failure";
        }
    }

    public Optional<?> getById(Integer id) {
        try{
            Optional<Task> task = taskRepository.findById(id);
            if (task.isEmpty())
            {
                return Optional.of("Data Not Found");
            }
            return task;
        } catch (Exception e)
        {
            throw new RuntimeException("Server Error");
        }
    }

    public Task updateTask(Integer id, Task taskDetails) {
        Task task = taskRepository.findById(id).orElseThrow(()-> new RuntimeException("Task Not Found"));
        task.setTitle(taskDetails.getTitle());
        task.setDescription(taskDetails.getDescription());
        task.setDueDate(taskDetails.getDueDate());
        task.setStatus(taskDetails.getStatus());
        return taskRepository.save(task);
    }
}
