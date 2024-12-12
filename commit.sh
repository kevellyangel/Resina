#!/bin/bash

# Adiciona todos os arquivos ao stage
git add .

# Faz o commit com uma mensagem automática (pode personalizar)
git commit -m "Commit automático - $(date)"

# Envia as alterações para o repositório remoto
git push origin main
