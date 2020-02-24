package websocket.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import websocket.model.Message;

public interface MessageRepository extends JpaRepository<Message, Integer> {
}
