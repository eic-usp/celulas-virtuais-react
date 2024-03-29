import React from 'react'
import { Container, Typography, Grid } from '@material-ui/core'
import '../App.css'
import cibfar from './svg/cibfar.svg'
import fapesp from './svg/fapesp.svg'
import eic from './svg/eic.svg'

export default function About() {
  const textAlign = { textAlign: 'center' }
  return (
    <Container>
      <Typography>
        <p className='titulo'>Células Virtuais</p>
        <p style={textAlign}>
          Desenvolvido pelo o EIC (CEPID-FAPESP) em parceria com o Departamento
          de Bioquímica Médica, ICB, UFRJ
        </p>
        <Grid
          container
          direction='row'
          justify='space-evenly'
          alignItems='center'
        >
          <img alt='CIBFar' src={cibfar} />
          <img alt='FAPESP' src={fapesp} />
          <img alt='EIC' src={eic} />
        </Grid>

        <p style={textAlign}>
          Educação Continuada para Professores do Ensino Médio: Tecnologias
          Educacionais (CNPq: 550847/2001-4)
        </p>

        <p className='titulo'>Autores</p>

        <p style={textAlign}>
          <p style={{ fontWeight: 'bold', marginBottom: '-5px' }}>
            Coordenação:
          </p>
          Profa. Dra. Leila Maria Beltramini
          <div>Gislaine Costa</div>
          <div>Dra. Simone F. Souza, Consultora</div>
        </p>

        <p style={textAlign}>
          <p style={{ fontWeight: 'bold', marginBottom: '-5px' }}>
            Programação:
          </p>
          Daniel Sá Barretto Prado Garcia
        </p>

        <p style={textAlign}>
          <p style={{ fontWeight: 'bold', marginBottom: '-5px' }}>
            Modelagem 3D:
          </p>
          Daniel David de Oliveira
        </p>
      </Typography>
    </Container>
  )
}
