// aula 13
// Array - Tipos de dados

var array =
    [
        ['Joao', 'Maria', 'Jose', 'Antonio', 'Pedro', 'Amanda'],
        ['Joao', 'Maria', 'Jose', 'Antonio', 'Pedro', 'Amanda'],
        ['Joao', 'Maria', 'Jose', 'Antonio', 'Pedro', 'Amanda']
    ];
console.log(array.length);
console.log(array[0][2]);
console.log(array[2])

console.log(array[0].slice(0, 6)); // para pegar 6 valores da primeira Array;

array.push('valor');// adiciona valores ao final de um array
array.unshift('valor'); // remove o último elemento de um array
array.pop('valor'); // remove o primeiro elemento de um array
array.shift('valor'); // adiciona elementos ao início de um array


console.log("//////////////////////////////");

// aula 14
// Tipos de dados

var funcionario = {
    'nome': 'Pedro Souza Gomes',
    'ano_nasc': 1972,
    'cpf': '111.111.111.11',
    'cargo': 'Analista de Sistemas'
};
    // formas de acessar os dados na array de objeto
console.log(funcionario['nome']);
console.log(funcionario.ano_nasc);
    // alterando os dados
funcionario.cargo = 'desenvolvedor';
    // quando colocamos chames que não existem ela é criada.;
funcionario.cnh = '123456789ab';


var cursos = [
    {
        'titulo': 'Aprenda programação em Python 3 com facilidade do zero',
        'avaliacoes': 680,
        'alunos': 2300,
        'categorias': ['programacao', 'tecnologia']
    },

    {
        'titulo': 'Aprenda PHP e faça sites dinâmicos',
        'avaliacoes': 180,
        'alunos': 350,
        'categorias': ['desenvolvimento web', 'programacao']
    },

    {
        'titulo': 'Excel do Zero ao Avançado',
        'avaliacoes': 420,
        'alunos': 1800,
        'categorias': ['produtividade', 'gestão']
    }
    
];
console.log(cursos[1].categorias[0]);

cursos[2].categorias[1] = 'administracao';

console.log("//////////////////////////////");

// aula 15
// metodos de objetos

var aluno = {
    'nome': 'Maria',
    'sobrenome': 'Silva',
    'nome_completo': function () {
        var n_completo = this.nome + this.sobrenome;
        return n_completo;
    }
};

console.log(aluno.nome_completo());



console.log("//////////////////////////////");