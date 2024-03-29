import React from 'react'
import { List, ListItem, ListItemText, Button, Drawer } from '@material-ui/core'
import Organells from '../../json/Organells'
import DraggableOrganell from './DraggableOrganell'

export default function OrganellDrawer(props) {
  let mapOrganells = []

  Organells.organells.forEach(element => {
    if (props.organells.indexOf(element.id) !== -1) {
      mapOrganells.push(
        <DraggableOrganell
          key={element.id}
          id={element.id}
          onDrag={props.hideDrawer}
          name={element.name}
          disabled={false}
        >
          <ListItem button key={element.id}>
            <img
              alt={element.id}
              src={element.gif}
              key={element.id}
              style={{ width: '50px', height: '40px' }}
            ></img>
            <ListItemText primary={element.name} />
          </ListItem>
        </DraggableOrganell>
      )
    }
  })

  return (
    <div>
      <Drawer
        anchor='right'
        //variant={CustomResponsive('','','permanent')}
        open={props.open}
        onClose={props.closeDrawer}
        onOpen={props.openDrawer}
        style={{ visibility: props.hidden, width: '40em' }}
      >
        <List>{mapOrganells}</List>
      </Drawer>
      <Button
        onClick={props.handleDrawer}
        style={{
          marginBottom: '15px',
          marginTop: '15px',
          
        }}
        color='secondary'
        variant='contained'
      >
        Escolha aqui
      </Button>
    </div>
  )
}
