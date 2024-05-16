 using System;

public static Desafio
{
  public static void Main()
  {
    // Lê os valores de entrada:
    float valorSalario = float.Parse(Console.ReadLine());
    float valorBeneficio = float.Parse(Console.ReadLine());

    float valorImposto = 0;
    if (valorSalario >= 0 && valorSalario <=1100)
    {
      // Atribui a aliquota de 5% mediante o salário:
      valorImposto = 0.05F * valorSalario;
    } 
    else if (valorSalario >= 1100.01 && valorSalario <=2500)
    {
      // Atribui a aliquota de 10% mediante o salário:
      valorImposto = 0.10F * valorSalario;
    }
    else
    {
      // Atribui a aliquota de 15% mediante o salário:
      valorImposto = 0.15F * valorSalario;
    }

    float saida = valorSalario - valorImposto + valorBeneficio;
    console.WriteLine(saida.ToString("0.00"));
  }
}