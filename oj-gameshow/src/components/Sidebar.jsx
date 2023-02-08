import { Toolbar } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";

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
            <ListItem key={jogador.nome} disablePadding>
              <ListItemText
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
                primary={jogador.nome + " - " + jogador.pontos}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}

export default Sidebar;
