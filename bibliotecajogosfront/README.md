## Arquitetura

A aplicação utiliza uma arquitetura monolítica distribuída em nuvem pública.

Frontend:
- React SPA

Backend:
- Node.js + Express

Banco de Dados:
- PostgreSQL

Mensageria:
- AWS SQS

Serverless:
- AWS Lambda

## Alta Disponibilidade

A aplicação poderá ser executada em múltiplas instâncias do backend.
O banco PostgreSQL pode ser hospedado em serviço gerenciado.
A utilização de filas SQS desacopla o processamento assíncrono da aplicação principal.

## Monitoramento e Observabilidade

- Logs da API Express.
- Logs das funções Lambda através do CloudWatch.
- Monitoramento dos serviços AWS utilizando CloudWatch.

## Infraestrutura como Código (IaC)

A pasta `infra/` contém a estrutura inicial em Terraform para provisionamento dos recursos de nuvem utilizados pela aplicação.

Recursos planejados:
- AWS EC2
- AWS SQS
- AWS Lambda
- PostgreSQL (RDS)