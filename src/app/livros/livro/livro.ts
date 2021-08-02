export interface Livro{
    id: string;
    nomeLivro: string;
    capaLink: string;
    dataPublicacao: string;
    nomeAutor: string;
    edicao: string;
    dataDeEmprestimo: string;
    dataDeDevolucao: string;
    isDisponivelParaEmprestimo: boolean;
    resumoLivro: string;
}