package com.jackson.taskManagement.controller;

import com.jackson.taskManagement.model.Task;
import com.jackson.taskManagement.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/task")
@CrossOrigin(origins = "http://localhost:5173")
public class HomeController {

    @Autowired
    private TaskService taskService;

    @PostMapping("/add")
    public Task addTask(@RequestBody Task task)
    {
        return taskService.addTask(task);
    }

    @GetMapping("/allTasks")
    public List<Task> getAllTasks()
    {
        return taskService.getAllTasks();
    }

    @DeleteMapping("/deleteTask/{id}")
    public String deleteTasks(@PathVariable Integer id)
    {
        return taskService.deleteTask(id);
    }

    @DeleteMapping("/deleteAll")
    public String deleteAll()
    {
        return taskService.deleteAll();
    }

    @GetMapping("/getTaskById/{id}")
    public Optional<?> getById(@PathVariable Integer id)
    {
        return taskService.getById(id);
    }

    @PutMapping("/update/{id}")
    public Task updateTask(@PathVariable Integer id,@RequestBody Task taskDetails)
    {
        return taskService.updateTask(id,taskDetails);
    }
}
