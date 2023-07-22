#include <stdio.h>
#include <stdlib.h>

int main() 
{
  // strcmp (strq1, strq2)== 0
  // Pedra, papel ou tesoura!

  char player1[256];
  char player2[256];

  printf("\nPlayer 1, sua vez...");
  scanf("%s", &player1);

  printf("\nPlayer 2, sua vez...");
  scanf("%s", &player2);

  printf("\nAguarde, estamos calculando o resultado...\n");
  if(strcmp(player1, "papel") == 0 ){
      if(strcmp(player2, "papel") == 0 ){
      printf("Empate!!!");
    }else if(strcmp(player2, "tesoura") == 0) {
      printf("Player 2 Venceu (Tesoura Corta Papel!");
    }else if(strcmp(player2, "pedra") == 0) {
      printf("Player 1 Venceu (Papel Embrulha Pedra!");
    }else{
      printf("O Player 2 jogou uma informacao invalida!");
    }
  }else if(strcmp(player1, "tesoura") == 0) {
    if(strcmp(player2, "papel") == 0 ){
      printf("Player 1 Venceu (Tesoura Corta Papel!");
    }else if(strcmp(player2, "tesoura") == 0) {
      printf("Empate!!!");
    }else if(strcmp(player2, "pedra") == 0) {
      printf("Player 2 Venceu (Pedra Quebra Tesoura!");
    }else{
      printf("O Player 2 jogou uma informacao invalida!");
    }
  }else if(strcmp(player1, "pedra") == 0) {
    if(strcmp(player2, "papel") == 0 ){
      printf("Player 2 Venceu (Papel embrulha pedra!");
    }else if(strcmp(player2, "tesoura") == 0) {
      printf("Player 1 Venceu (Pedra Quebra Tesoura!");
    }else if(strcmp(player2, "pedra") == 0) {
      printf("Empate!!!");
    }else{
      printf("O Player 2 jogou uma informacao invalida!");
    }
  }else{
    printf("Voce jogou uma informacao invalida!");
  }

  return 0;
}