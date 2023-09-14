const { execSync } = require('child_process')
const fs = require('fs-extra')
const path = require('path')

function compilarEMover () {
  try {
    // Compilar o projeto Quasar
    execSync('npx quasar build', { stdio: 'inherit' })
    console.log('Compilação do projeto Quasar concluída com sucesso.')

    // Diretório de origem dos arquivos compilados
    const origem = path.join(__dirname, 'dist/spa')

    // Diretório de destino para mover os arquivos compilados
    let destino = process.argv[2]
    const dev = 'T:RemazaEmpresas.Intranet'
    const hml = 'T:RemazaEmpresas.Intranet' // mudar quando tiver homolog
    if (destino === 'hml') {
      destino = hml
    } else {
      destino = dev
    }
    // Verificar se o diretório de destino existe
    if (!fs.existsSync(destino)) {
      console.error('O diretório de destino não existe. Saindo...')
      process.exit(1)
    }

    // Excluir o conteúdo do diretório de destino
    fs.emptyDirSync(destino)
    console.log(
      `O conteúdo do diretório de destino foi excluído com sucesso: ${destino}`
    )

    // Mover os arquivos da pasta 'dist' para o diretório de destino
    fs.copySync(origem, destino)
    console.log(`Os arquivos foram movidos com sucesso para: ${destino}`)
  } catch (error) {
    console.error(
      'Erro durante a compilação ou movimentação de arquivos.',
      error
    )
    process.exit(1)
  }
}

compilarEMover()
