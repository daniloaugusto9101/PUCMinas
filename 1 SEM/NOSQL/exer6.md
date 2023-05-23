 - A consulta acima retornará todos os filmes que foram lançados após o ano 2000, limitando o resultado a 5 itens.

    - `MATCH (m:Filme) 
    WHERE m.lançado > 2000 
    RETURN m LIMIT 5`

- consulta para recuperar todos os filmes lançados após o ano de 2005.

MATCH (m:Movie)
WHERE m.released > 2005
RETURN m