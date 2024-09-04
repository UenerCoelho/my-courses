public class Usuario {
    public static void main(String[] args) throws Exception {
        SmartTv smartv = new SmartTv();

        System.out.println("TV Ligada? " + smartv.ligada);
        System.out.println("Canal Atual: " + smartv.canal);
        System.out.println("Volume Atual: " + smartv.volume);

        smartv.mudarCanal(22);

        smartv.aumentarVolume();
        smartv.aumentarVolume();
        smartv.diminuirVolume();
        smartv.diminuirVolume();

        smartv.diminuirVolume();
        smartv.diminuirVolume();
        smartv.diminuirVolume();
        smartv.diminuirVolume();
        smartv.aumentarCanal();

        smartv.ligar();
        System.out.println("Novo Status -> TV Ligada? " + smartv.ligada);

        smartv.desligar();
        System.out.println("Novo Status -> TV Ligada? " + smartv.ligada);
    }
}
