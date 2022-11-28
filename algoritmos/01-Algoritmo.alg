// Algoritmo Sem Restrições
inicio algoritmo
  declarar variáveis horário_filme, horário_atual

  se horário_atual >= horário_filme
  -- pode entrar

  fim se
  -- vamos esperar

fim algoritmo

// Algoritmo Com Restrições
inicio algoritmo
  declarar variáveis horário_filme, horário_atual

  se horário_atual >= horário_filme & horário_atual <= horário_filme + 30
  -- pode entrar

  fim se
  -- vamos esperar

fim algoritmo