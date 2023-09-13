// Classe que representa uma música
class Musica {
    constructor(public titulo: string, public artista: string, public duracao: number) {}
  }
  
  // Classe que representa uma biblioteca musical
  class BibliotecaMusical {
    private musicas: Musica[] = [];
  
    // Adicionar uma música à biblioteca
    adicionarMusica(musica: Musica): void {
      this.musicas.push(musica);
    }
  
    // Listar todas as músicas disponíveis na biblioteca
    listarMusicas(): void {
      console.log('Músicas disponíveis na biblioteca:');
      this.musicas.forEach((musica, index) => {
        console.log(`${index + 1}. Título: ${musica.titulo}, Artista: ${musica.artista}, Duração: ${musica.duracao} segundos`);
      });
    }
  
    // Reproduzir uma música específica da biblioteca
    reproduzirMusica(indice: number): void {
      if (indice >= 0 && indice < this.musicas.length) {
        const musica = this.musicas[indice];
        console.log(`Reproduzindo: ${musica.titulo} - ${musica.artista}`);
      } else {
        console.log('Índice de música inválido.');
      }
    }
  
    // Calcular a duração total de todas as músicas na biblioteca
    calcularDuracaoTotal(): number {
      return this.musicas.reduce((total, musica) => total + musica.duracao, 0);
    }
  }
  
  // Classe que representa um usuário do sistema
  class Usuario {
    constructor(public nome: string, public biblioteca: BibliotecaMusical) {}
  
    // Adicionar uma música à biblioteca do usuário
    adicionarMusica(musica: Musica): void {
      this.biblioteca.adicionarMusica(musica);
    }
  
    // Listar todas as músicas na biblioteca do usuário
    listarMusicas(): void {
      console.log(`Músicas na biblioteca de ${this.nome}:`);
      this.biblioteca.listarMusicas();
    }
  
    // Reproduzir uma música da biblioteca do usuário
    reproduzirMusica(indice: number): void {
      this.biblioteca.reproduzirMusica(indice);
    }
  }
  
  // Exemplo de uso:
  const bibliotecaPrincipal = new BibliotecaMusical();
  const usuario1 = new Usuario('Kelton', bibliotecaPrincipal);
  const usuario2 = new Usuario('Maria', bibliotecaPrincipal);
  
  const musica1 = new Musica("Can't feel my face", 'The Weeknd', 180);
  const musica2 = new Musica('Let me Blow Ya Mind', 'Eve', 240);
  const musica3 = new Musica('Leave the door open', 'Bruno Mars', 200);
  
  const musica4 = new Musica('Dream on', 'Aerosmith', 180);
  const musica5 = new Musica('HUMBLE.', 'Kendrick Lamar', 240);
  const musica6 = new Musica('Só por hoje', 'Detonautas', 200);

  usuario1.adicionarMusica(musica1);
  usuario1.adicionarMusica(musica2);
  usuario1.adicionarMusica(musica3);
  usuario2.adicionarMusica(musica4);
  usuario2.adicionarMusica(musica5);
  usuario2.adicionarMusica(musica6);
  
  usuario1.listarMusicas();
  usuario2.listarMusicas();
  
  console.log('Duração total da biblioteca principal:', bibliotecaPrincipal.calcularDuracaoTotal(), 'segundos');
  