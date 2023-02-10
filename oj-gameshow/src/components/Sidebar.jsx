import { Toolbar } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

import Alicia from "../images/alicia.png";
import Ceoreparque from "../images/Ceoreparque.png";
import Gerente from "../images/gerente.png";
import Lulu from "../images/Lulu.png";
import Maynie from "../images/Maynie.png";
import Mei from "../images/mei.png";
import NoName from "../images/noname.png";
import Sora from "../images/Sora.png";

function Sidebar() {
  const [jogadores, setJogadores] = useState([
    { id: 1, nome: "Hakuki", pontos: 0, avatar: Alicia },
    { id: 2, nome: "Rafa Pato", pontos: 0, avatar: Mei },
    { id: 3, nome: "iLoveRio", pontos: 0, avatar: Gerente },
    { id: 4, nome: "O Pucca", pontos: 0, avatar: NoName },
    { id: 5, nome: "Fry", pontos: 0, avatar: Maynie },
    { id: 6, nome: "Vagner", pontos: 0, avatar: Ceoreparque },
    { id: 7, nome: "Mr. Rogers", pontos: 0, avatar: Lulu },
    { id: 8, nome: "Voltjedi", pontos: 0, avatar: Sora },
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
        width: 320,
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
      <Box sx={{ width: 320 }}>
        <List sx={{ marginTop: 4 }}>
          {jogadores.map((jogador) => (
            <ListItem key={jogador.id}>
              <img className="oj-jogador-avatar" src={jogador.avatar} />
              <p className="oj-jogador-hud">
                {jogador.pontos + " - " + jogador.nome}
              </p>
              <AddCircleIcon
                className="oj-add-pontos-icon"
                onClick={() => handleAddPointClick(jogador.id)}
              />
              <RemoveCircleIcon
                className="oj-remove-pontos-icon"
                onClick={() => handleRemovePointClick(jogador.id)}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}

export default Sidebar;
