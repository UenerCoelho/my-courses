#include <stdio.h>
#include <stdlib.h>

int main() {
  char nome[256];
  int idade;

  printf("Olá qual seu nome?\n");
  scanf("%s", nome);

  printf("Qual sua idade?\n");
  scanf("%d", &idade);

  printf("Nome: %s\nIdade: %d\n", nome, idade);

  printf("\n Aguarde enquanto lemos seus dados...\n");

  printf("A primeira letra do seu nome é: %c", nome[0]);

  if(idade >= 18) {
    printf("\nVoce e adulto!");
  }else if(idade >= 12){
    printf("\nVoce e Adolescente!");
  }else{
    printf("\nVoce e crianca!");
  }

  return 0;
}