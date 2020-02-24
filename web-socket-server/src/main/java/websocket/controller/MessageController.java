package websocket.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.annotation.SubscribeMapping;
import org.springframework.stereotype.Controller;
import websocket.model.Message;
import websocket.repository.MessageRepository;

import java.util.List;

@Controller
public class MessageController {
    private final MessageRepository messageRepository;

    @Autowired
    public MessageController(MessageRepository messageRepository) {
        this.messageRepository = messageRepository;
    }

    @SubscribeMapping("/messages/get")
    public List<Message> getAllMessages() {
        return messageRepository.findAll();
    }

    @MessageMapping("/messages/post")
    @SendTo("/messages/created")
    public Message saveMessage(Message message){
        Message newMessage = messageRepository.save(message);
        return newMessage;
    }
}
