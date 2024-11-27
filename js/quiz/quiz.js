const quiz = {
    nome: "Você é noob ou pro no minecraft?",
    desc: "Teste para saber se você é iniciante ou avançado no minecraft",
    quest: [
        {
            id: "quest0",
            tipo: "1",
            limite: 1,
            enun: "Na primeira noite, o que você faz?",
            alt: [
                {
                    quest: "você constroi uma casa",
                    resp: "intermediario",
                    marcado: false
                },
                {
                    quest: "Vai em busca de minérios sem se preocupar com as criaturas da noite",
                    resp: "pro",
                    marcado: false
                },
                {
                    quest: "Cava um buraco e se esconde até o amanhecer",
                    resp: "noob",
                    marcado: false
                }
            ]
        },
        {
            id: "quest1",
            tipo: "2",
            limite:2,
            enun: "Qual o minério mais útil?",
            alt: [
                {
                    quest: "Ferro",
                    resp: "pro",
                    marcado: false
                },
                {
                    quest: "Ouro",
                    resp: "pro",
                    marcado: false
                },
                {
                    quest: "Diamante",
                    resp: "noob",
                    marcado: false
                },
                {
                    quest:"redstone",
                    resp: "intermediario",
                    marcado: false
                }
            ]
        },
        {
            id: "quest2",
            tipo: "1",
            limite:1,
            enun: "Você achou seus primeiros 5 diamantes. O que você fará com eles?",
            alt: [
                {
                    quest: "Elmo",
                    resp: "noob",
                    marcado: false
                },
                {
                    quest: "Picareta e Mesa de Encantamentos",
                    resp: "pro",
                    marcado: false
                },
                {
                    quest: "toca disco",
                    resp: "intermediario",
                    marcado: false
                },
                {
                    quest:"Armadura completa",
                    resp: "noob",
                    marcado: false
                }
            ]
        },
        {
            id: "quest3",
            tipo: "2",
            limite:2,
            enun: "Melhor farm de xp?",
            alt: [
                {
                    quest: "Endarman",
                    resp: "pro",
                    marcado: false
                },
                {
                    quest: "Farm de mob spawner",
                    resp: "noob",
                    marcado: false
                },
                {
                    quest: "Mobtrap clássica ",
                    resp: "intermediario",
                    marcado: false
                },
                {
                    quest:"Farm de porco",
                    resp: "noob",
                    marcado: false
                }
            ]
        },
        {
            id: "quest4",
            tipo: "2",
            limite:4,
            enun: "Melhor comida do jogo?",
            alt: [
                {
                    quest: "Carne podre",
                    resp: "noob",
                    marcado: false
                },
                {
                    quest: "Galinha assada",
                    resp: "intermediario",
                    marcado: false
                },
                {
                    quest: "bife",
                    resp: "pro",
                    marcado: false
                },
                {
                    quest:"Bacon",
                    resp: "pro",
                    marcado: false
                },
                {
                    quest:"Cenoura",
                    resp:"noob",
                    marcado: false
                },
                {
                    quest:"Cenoura dourada",
                    resp:"pro",
                    marcado: false
                },
                {
                    quest:"Torta de albobora",
                    resp:"intermediario",
                    marcado: false
                },
                {
                    quest: "beterraba",
                    resp: "noob",
                    marcado: false
                }
            ]
        },
        {
            id: "quest5",
            tipo: "2",
            limite:2,
            enun: "Farms essenciais para o começo da gameplay",
            alt: [
                {
                    quest: "Farm de Pedra",
                    resp: "intermediario",
                    marcado: false
                },
                {
                    quest: "Farm de pólvora",
                    resp: "noob",
                    marcado: false
                },
                {
                    quest: "Farm de Areia",
                    resp: "noob",
                    marcado: false
                },
                {
                    quest:"Farm de Madeira",
                    resp: "pro",
                    marcado: false
                },
                {
                    quest:"Farm de xp",
                    resp:"pro",
                    marcado: false
                },
                {
                    quest: "Farm de Comida",
                    resp: "intermediario",
                    marcado: false
                }
                
            ]
        },
        {
            id: "quest6",
            tipo: "2",
            limite:3,
            enun: "Quais os intens mais últeis?",
            alt: [
                {
                    quest: "Maçã dourada",
                    resp: "pro",
                    marcado: false
                },
                {
                    quest: "Totem da imortalidade",
                    resp: "pro",
                    marcado: false
                },
                {
                    quest: "Balde de Leite",
                    resp: "intermediario",
                    marcado: false
                },
                {
                    quest:"Poção de dano",
                    resp: "intermediario",
                    marcado: false
                },
                {
                    quest:"Couro",
                    resp:"noob",
                    marcado: false
                },
            ]
                
        },
        {
            id: "quest7",
            tipo: "1",
            limite:1,
            enun: "O que dá mais medo?",
            alt: [
                {
                    quest: "Herobrine",
                    resp: "noob",
                    marcado: false
                },
                {
                    quest: "Wander",
                    resp: "noob",
                    marcado: false
                },
                {
                    quest: "Endermen",
                    resp: "noob",
                    marcado: false
                },
                {
                    quest:"Bebê zumbi com armadura e espada",
                    resp: "pro",
                    marcado: false
                },
                {
                    quest:"fantasmas",
                    resp:"noob",
                    marcado: false
                }
            ]
        },
        
        {
            id: "quest8",
            tipo: "2",
            limite:2,
            enun: "Quais mobs mais últeis?",
            alt: [
                {
                    quest: "Galinha",
                    resp: "noob",
                    marcado: false
                },
                {
                    quest: "piglin",
                    resp: "pro",
                    marcado: false
                },
                {
                    quest: "Endermen",
                    resp: "intermediario",
                    marcado: false
                },
                {
                    quest:"Aldeão",
                    resp: "pro",
                    marcado: false
                },
            ]
        },
        {
            id: "quest9",
            tipo: "1",
            limite:1,
            enun: "Qual a melhor parte do jogo?",
            alt: [
                {
                    quest: "Sistema de economia",
                    resp: "pro",
                    marcado: false
                },
                {
                    quest: "Sequestro de aldeão",
                    resp: "pro",
                    marcado: false
                },
                {
                    quest: "Matar o dragão",
                    resp: "intermediario",
                    marcado: false
                },
                {
                    quest:"Lutar no nether",
                    resp: "intermediario",
                    marcado: false

                }  
            ]
        },
        {
            
        
        id: "quest10",
            tipo: "1",
            limite:1,
            enun: "Quem é melhor?",
            alt: [
                {
                    quest: "Mozzart",
                    resp: "noob",
                    marcado: false
                },
                {
                    quest: "Chopin",
                    resp: "intermediario",
                    marcado: false
                },
                {
                    quest: "Mundo Bita",
                    resp: "noob",
                    marcado: false
                },
                {
                    quest:"C418",
                    resp: "pro",
                    marcado: false
                }  
            ]
        },
        {
            id: "quest11",
            tipo: "1",
            limite:1,
            enun: "Quantos minerios faz uma armadura completa?",
            alt: [
                {
                    quest: "20",
                    resp: "intermediario",
                    marcado: false
                },
                {
                    quest: "32",
                    resp: "noob",
                    marcado: false
                },
                {
                    quest: "24",
                    resp: "pro",
                    marcado: false
                },
                {
                    quest:"4",
                    resp: "noob",
                    marcado: false
                }  
            ]
        },
        {
            id: "quest12",
            tipo: "1",
            limite:1,
            enun: "Qual bloco mais resistente coletável?",
            alt: [
                {
                    quest: "Bloco de diamante",
                    resp: "noob",
                    marcado: false
                },
                {
                    quest: "Obisidiana",
                    resp: "pro",
                    marcado: false
                },
                {
                    quest: "Tijolos de pedra",
                    resp: "noob",
                    marcado: false
                },
                {
                    quest:"Bloco de quartzo",
                    resp: "intermediario",
                    marcado: false
                }  
            ]    
        },
        {
            id: "quest13",
            tipo: "1",
            limite:1,
            enun: "Você usa o comando de Manter Iventário?",
            alt: [
                {
                    quest: "Sim",
                    resp: "noob",
                    marcado: false
                },
                {
                    quest: "Não",
                    resp: "intermediario"
                },
                {
                    quest: "Nunca",
                    resp: "pro"
                },
                
            ]    
        },
        {
            id: "quest14",
            tipo: "1",
            limite:1,
            enun: "Qual o nome do Zumbi do deserto?",
            alt: [
                {
                    quest: "Múmia",
                    resp: "intermediario"
                },
                {
                    quest: "Criatura",
                    resp: "pro"
                },
                {
                    quest: "Enormossauro",
                    resp: "noob"
                },
                
            ]    
        },
        {
            id: "quest15",
            tipo: "1",
            limite:1,
            enun: "Qual o nome do esqueleto da neve?",
            alt: [
                {
                    quest: "Esqueleto errante",
                    resp: "pro"
                },
                {
                    quest: "Elza",
                    resp: "noob"
                },
                {
                    quest: "Friagem",
                    resp: "noob"
                }
            ]
        }
            
    ]
}
 

export default quiz;