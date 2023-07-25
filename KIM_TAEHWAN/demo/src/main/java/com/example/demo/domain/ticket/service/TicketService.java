package com.example.demo.domain.ticket.service;

import com.example.demo.domain.ticket.repository.TicketRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@Transactional
@RequiredArgsConstructor
public class TicketService {

    TicketRepository ticketRepository;
}
