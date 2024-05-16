import java.util.Scanner;

public class Desafio {
  public static void main(String[] args) {
    // Lê os valores de Entrada:
    Scanner leitorDeEntradas = new Scanner(System.in);
    float valorSalario = leitorDeEntradas.nextFloat();
    float valorBeneficios = leitorDeEntradas.nextFloat();

    float valorImposto = 0;
    if (valorSalario >= 0 && valorSalario <= 1100) {
      // Atribui a aliquota de 5% mediante o salário:
      valorImposto = 0.05F * valorSalario;
    }
    // ToDo Criar as demais condições para as aliquotas de 10.00% de 15.00%
    else if (valorSalario >= 1100.01 && valorSalario <= 2500.00) {
      // Atribui a aliquota de 10% mediante o salário:
      valorImposto = 0.10F * valorSalario;
    } else {
      // Atribui a aliquota de 15% mediante o salário:
      valorImposto = 0.15F * valorSalario;
    }
    // Calcua e imprime a Saída (com 2 casa decimais):
    float saida = valorSalario - valorImposto + valorBeneficios;
    System.out.println(String.format("%.2F", saida));
  }
}