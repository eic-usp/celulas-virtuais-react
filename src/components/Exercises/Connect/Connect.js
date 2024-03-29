import React from 'react'
import '../../../App.css'
import Organells from '../../json/Organells'
import LeftBox from './LeftBox'
import Grid from '@material-ui/core/Grid/Grid'
import RightBox from './RightBox'
import './box.css'
import { jsPlumb } from 'jsplumb'
import { Typography } from '@material-ui/core'

export default class Connect extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      A: '',
      B: '',
      C: '',
      D: '',
      imgLoaded: 0,
    }
  }

  componentWillUnmount() {
    document.getElementById('mainContent').style.overflowY = 'auto'
    document.getElementById('mainContent').style.height = '100vh'
    jsPlumb.deleteEveryEndpoint()
    jsPlumb.deleteEveryConnection()
  }

  componentDidMount() {

    document.getElementById('mainContent').style.overflowY = 'hidden'
    document.getElementById('mainContent').style.height = '100%'
    //document.getElementById('mainContent').style.paddingBottom = '9em'

    jsPlumb.ready((props = this.props) => {
      var target = {
        isSource: false,
        isTarget: true,
        endpoint: ['Dot', { radius: 10 }],
        paintStyle: { fill: 'white', outlineStroke: 'black', strokeWidth: 1 },
        hoverPaintStyle: { outlineStroke: 'lightblue' }
      }
      var source = {
        id: 'test',
        cssClass: 'circle',
        draggable: true,
        isSource: true,
        isTarget: false,
        connector: ['Bezier', { curviness: 50 }],
        endpoint: ['Dot', { radius: 10 }],
        paintStyle: { fill: 'white', outlineStroke: 'black', strokeWidth: 1 },
        hoverPaintStyle: { outlineStroke: 'lightblue' },
        connectorStyle: {
          outlineStroke: '#1ABC9C',
          strokeWidth: 1,
          width: '80%',
          position: 'relative'
        },
        connectorHoverStyle: { strokeWidth: 2 }
      }
      let index = 'A'
      while (index !== 'E') {
        jsPlumb.addEndpoint(index, { anchors: ['Left'] }, target)
        index = String.fromCharCode(index.charCodeAt(0) + 1)
      }
      props.organellsLeft.forEach(element => {
        jsPlumb.addEndpoint(element, { anchors: ['Right'] }, source)
      })
    })
    jsPlumb.bind('connection', info => {
      this.setState({ [info.targetId]: info.sourceId }, () => {
        if (
          this.props.answer.A === this.state.A &&
          this.props.answer.B === this.state.B &&
          this.props.answer.C === this.state.C &&
          this.props.answer.D === this.state.D
        ) {
          this.props.complete()
        }
      })
    })
    
  }

  render() {
    if (this.state.imgLoaded === 4) jsPlumb.repaintEverything()
    const left = []
    
    
    const style = {
      margin: '15px'
    }
    let desc = []
    let i = 0
    let id = 'A'

    this.props.descriptionRight.forEach(element => {
      desc.push(
        <RightBox
          id={id}
          style={style}
          className={element.answer}
          desc={element.desc}
        />
      )
      id = String.fromCharCode(id.charCodeAt(0) + 1)
    })
    Organells.organells.forEach(element => {
      if (this.props.organellsLeft.indexOf(element.name) !== -1) {
        left.push(
          <Grid
            container
            direction='row'
            justify='center'
            alignItems='center'
          >
            <LeftBox
              onLoad={() =>
                this.setState({ imgLoaded: this.state.imgLoaded + 1 })
              }
              id={element.name}
              img={element.gif}
              desc={element.name}
            />
            {desc[i]}
          </Grid>
        )
        i++
      }
    })
    window.addEventListener('resize', () => {
      jsPlumb.repaintEverything()
    })

    return (
      <div id='connections' style={{marginBottom:'4.5em', minHeight:'68vh'}}>
        <p className='titulo' style={{marginBottom:'-.2em'}}>Associe as Organelas</p>
        <Grid
          container
          direction='column'
          justify='space-between'
          alignItems='center'
        >
          <Typography variant='h5' align='center'>
            Associe as organelas com suas respectivas funções celulares:
          </Typography>
          {left}
        </Grid>
      </div>
    )
  }
}
