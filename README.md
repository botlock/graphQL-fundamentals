- Quais problemas GraphQL resolve ?

  - Overfetching: Busca mais dados do que precisa.

  - Underfetching: Busca dados de menos, ou seja os dados de um determinada rota não saõ suficientes, uma chamada que não devolve todos os dados que você precisaria

    http://localhost:3008/graphQL

    Dificuldades:
        -cache

```gql
    query {
        users{
            id
            name
            github

            addresses{
                city
                state
                country
            }
        }
    }
```
