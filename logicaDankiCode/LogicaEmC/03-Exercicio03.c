#include <stdio.h>
#include <stdlib.h>

int main()
{
  int hora_cinema = 20;
  int hora_atual = 20;

  // Posso entrar no Cinema?
  if(hora_atual > hora_cinema + 30) {
    printf("Passou do tempo Limite! Não pode entrar.");
  } else if (hora_atual < hora_cinema - 30) {
    printf("Nem Abriu a porta do cinema ainda!");
  } else {
    printf("O horário está certo! Pode entrar");
  }
  return 0;
}