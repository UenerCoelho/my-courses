#include <stdio.h>
#include <stdlib.h>

int main() {
  char nome[256];
  char sobrenome[2556];
  int ano_nascimento;
  int idade;

  printf("Qual seu nome?\n");
  scanf("%s", nome);

  printf("Qual seu SobreNome?\n");
  scanf("%s", sobrenome);

  printf("Em que ano Naceste?\n");
  scanf("%d", &ano_nascimento);

  printf("Show de Bola %s... Qual sua idade?\n", nome);
  scanf("%d", &idade);

  printf("Muito bom! o %s %s, nascido em %d, tem %d anos de idade!", nome, sobrenome, ano_nascimento, idade);

  return 0;
}