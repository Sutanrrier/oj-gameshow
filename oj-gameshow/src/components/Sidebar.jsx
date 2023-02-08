import { Toolbar } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

function Sidebar() {
  const [jogadores, setJogadores] = useState([
    { id: 1, nome: "Hakuki", pontos: 0 },
    { id: 2, nome: "Rafaela★♪", pontos: 0 },
    { id: 3, nome: "☆Gerente☆", pontos: 0 },
    { id: 4, nome: "Pucca", pontos: 0 },
    { id: 5, nome: "Fryer?!", pontos: 0 },
    { id: 6, nome: "Vagner", pontos: 0 },
    { id: 7, nome: "Dreigel", pontos: 0 },
    { id: 8, nome: "Voltjedi", pontos: 0 },
  ]);

  function handleAddPointClick(id) {
    const jogadoresAux = [...jogadores];
    jogadoresAux[id - 1].pontos += 1;

    let jogadoresOrganizados = jogadoresAux.sort((j1, j2) =>
      j1.pontos < j2.pontos ? 1 : j1.pontos > j2.pontos ? -1 : 0
    );

    for (let i = 0; i < jogadoresOrganizados.length; i++) {
      jogadoresOrganizados[i].id = i + 1;
    }

    setJogadores(jogadoresOrganizados);
  }

  function handleRemovePointClick(id) {
    const jogadoresAux = [...jogadores];
    if (jogadoresAux[id - 1].pontos != 0) {
      jogadoresAux[id - 1].pontos -= 1;
    }

    let jogadoresOrganizados = jogadoresAux.sort((j1, j2) =>
      j1.pontos < j2.pontos ? 1 : j1.pontos > j2.pontos ? -1 : 0
    );

    for (let i = 0; i < jogadoresOrganizados.length; i++) {
      jogadoresOrganizados[i].id = i + 1;
    }

    setJogadores(jogadoresOrganizados);
  }

  return (
    <Drawer
      sx={{
        width: 250,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h1 className="oj-pontuacao-title">PONTUAÇÃO</h1>
      </Toolbar>
      <Box sx={{ width: 250 }}>
        <List sx={{ marginTop: 4 }}>
          {jogadores.map((jogador) => (
            <ListItem key={jogador.id}>
              <AddCircleIcon
                className="oj-add-pontos-icon"
                onClick={() => handleAddPointClick(jogador.id)}
              />
              <RemoveCircleIcon
                className="oj-remove-pontos-icon"
                onClick={() => handleRemovePointClick(jogador.id)}
              />
              <p className="oj-jogador-hud">
                {jogador.nome + " - " + jogador.pontos}
              </p>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}

export default Sidebar;
